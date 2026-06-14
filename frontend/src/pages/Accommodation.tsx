import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageContainer from "@/components/layout/PageContainer";
import { useAuth } from "@/context/AuthContext";
import {
  Search, MapPin, Wifi, Car, Home, MessageCircle, X, Upload,
  Loader2, Trash2, WashingMachine, Refrigerator, Building2, Crosshair,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ConnectionButton from "@/components/ConnectionButton";

const API_BASE = "http://localhost:5000/api";

interface AccommodationDoc {
  _id: string;
  title: string;
  category: string;
  address: string;
  contact: string;
  rent: number;
  amenities: string[];
  description: string;
  lat?: number;
  lng?: number;
  createdAt: string;
  postedBy: { _id: string; name: string; college?: string };
}

const categories = ["All", "PG", "Flat", "Home", "Office"];
const uploadCategories = ["PG", "Flat", "Home", "Office"];
const availableAmenities = ["WiFi", "Parking", "Laundry", "Fridge", "Furnished", "Meals", "Gym", "AC", "Geyser", "Power Backup"];

export default function Accommodation({ myListingsOnly = false }: { myListingsOnly?: boolean }) {
  const { user, token } = useAuth();

  const [items, setItems] = useState<AccommodationDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Upload modal
  const [showUpload, setShowUpload] = useState(false);
  const [form, setForm] = useState({
    title: "", category: "", address: "", contact: "", rent: "", description: "",
  });
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  // Geocoding state
  const [geo, setGeo] = useState<{ lat: number; lng: number; display: string } | null>(null);
  const [geocoding, setGeocoding] = useState(false);
  const [geoError, setGeoError] = useState("");

  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Leaflet interactive map refs
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletMapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletMarkerRef = useRef<any>(null);

  const fetchItems = async () => {
    setLoading(true);
    setFetchError("");
    try {
      const endpoint = myListingsOnly ? `${API_BASE}/accommodations/my` : `${API_BASE}/accommodations`;
      const headers: Record<string, string> = {};
      if (myListingsOnly && token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(endpoint, { headers, cache: "no-store" });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      setItems(data);
    } catch {
      setFetchError("Could not load listings. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, [myListingsOnly]);

  // Load Leaflet (CDN) and initialize interactive pin-map when upload modal opens
  useEffect(() => {
    if (!showUpload) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    const initMap = () => {
      if (!mapContainerRef.current || leafletMapRef.current) return;
      const L = w.L;
      const startLat = geo?.lat ?? 22.5726; // default: Kolkata
      const startLng = geo?.lng ?? 88.3639;

      const map = L.map(mapContainerRef.current).setView([startLat, startLng], geo ? 15 : 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      const marker = L.marker([startLat, startLng], { draggable: true }).addTo(map);

      const updateFromLatLng = (lat: number, lng: number) => {
        reverseGeocode(lat, lng);
      };

      marker.on("dragend", () => {
        const pos = marker.getLatLng();
        updateFromLatLng(pos.lat, pos.lng);
      });

      map.on("click", (e: { latlng: { lat: number; lng: number } }) => {
        marker.setLatLng(e.latlng);
        updateFromLatLng(e.latlng.lat, e.latlng.lng);
      });

      leafletMapRef.current = map;
      leafletMarkerRef.current = marker;

      // Fix sizing inside modal
      setTimeout(() => map.invalidateSize(), 100);
    };

    if (w.L) {
      initMap();
    } else {
      // Load Leaflet CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }
      // Load Leaflet JS
      if (!document.getElementById("leaflet-js")) {
        const script = document.createElement("script");
        script.id = "leaflet-js";
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = initMap;
        document.body.appendChild(script);
      } else {
        const existing = document.getElementById("leaflet-js") as HTMLScriptElement;
        existing.onload = initMap;
        if (w.L) initMap();
      }
    }

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
        leafletMarkerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUpload]);

  // Sync marker position when geo changes (e.g. from "locate address" or current location)
  useEffect(() => {
    if (geo && leafletMapRef.current && leafletMarkerRef.current) {
      leafletMarkerRef.current.setLatLng([geo.lat, geo.lng]);
      leafletMapRef.current.setView([geo.lat, geo.lng], 15);
    }
  }, [geo]);

  const filtered = items.filter((acc) => {
    const q = search.toLowerCase();
    const matchesSearch =
      (acc.title || "").toLowerCase().includes(q) ||
      (acc.address || "").toLowerCase().includes(q) ||
      (acc.postedBy?.name || "").toLowerCase().includes(q);
    const matchesCategory = activeCategory === "All" || acc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const toggleAmenity = (a: string) =>
    setSelectedAmenities((p) => p.includes(a) ? p.filter((x) => x !== a) : [...p, a]);

  // Geocode address using Nominatim (OpenStreetMap, free, no API key)
  const handleLocateAddress = async () => {
    if (!form.address.trim()) { setGeoError("Enter an address first"); return; }
    setGeocoding(true);
    setGeoError("");
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(form.address)}`,
        { headers: { "Accept": "application/json" } }
      );
      const data = await res.json();
      if (!data || data.length === 0) {
        setGeoError("Location not found. Try a more specific address.");
        return;
      }
      setGeo({
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        display: data[0].display_name,
      });
    } catch {
      setGeoError("Could not locate address. Check your connection.");
    } finally {
      setGeocoding(false);
    }
  };

  // Reverse geocode lat/lng -> address (used after map click / current location)
  const reverseGeocode = async (lat: number, lng: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
        { headers: { "Accept": "application/json" } }
      );
      const data = await res.json();
      const display = data?.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      setGeo({ lat, lng, display });
      setForm((p) => ({ ...p, address: display }));
    } catch {
      setGeo({ lat, lng, display: `${lat.toFixed(5)}, ${lng.toFixed(5)}` });
    }
  };

  // Use browser's current location (GPS)
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) { setGeoError("Geolocation not supported by your browser"); return; }
    setGeocoding(true);
    setGeoError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        reverseGeocode(pos.coords.latitude, pos.coords.longitude);
        setGeocoding(false);
      },
      () => { setGeoError("Could not get your location. Please allow location access."); setGeocoding(false); },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) { setUploadError("Title is required"); return; }
    if (!form.category) { setUploadError("Please select a category"); return; }
    if (!form.address.trim()) { setUploadError("Address is required"); return; }
    if (!form.contact.trim()) { setUploadError("Contact number is required"); return; }
    if (!form.rent || Number(form.rent) < 0) { setUploadError("Valid rent is required"); return; }

    setUploading(true);
    setUploadError("");
    try {
      const res = await fetch(`${API_BASE}/accommodations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: form.title,
          category: form.category,
          address: form.address,
          contact: form.contact,
          rent: form.rent,
          description: form.description,
          amenities: selectedAmenities,
          lat: geo?.lat,
          lng: geo?.lng,
        }),
      });
      const raw = await res.text();
      console.log("[Accommodation] raw response:", raw);
      let data;
      try { data = JSON.parse(raw); } catch { throw new Error(`Server returned non-JSON: ${raw.slice(0, 200)}`); }
      if (!res.ok) throw new Error(data.message || "Upload failed");

      setItems((p) => [data, ...p]);
      setShowUpload(false);
      setForm({ title: "", category: "", address: "", contact: "", rent: "", description: "" });
      setSelectedAmenities([]);
      setGeo(null);
    } catch (err: unknown) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this listing?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`${API_BASE}/accommodations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      setItems((p) => p.filter((x) => x._id !== id));
    } catch {
      alert("Could not delete listing");
    } finally {
      setDeletingId(null);
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi": return <Wifi className="h-3 w-3" />;
      case "parking": return <Car className="h-3 w-3" />;
      case "laundry": return <WashingMachine className="h-3 w-3" />;
      case "fridge": return <Refrigerator className="h-3 w-3" />;
      default: return null;
    }
  };

  const mapUrlFor = (acc: AccommodationDoc) => {
    if (acc.lat && acc.lng) {
      const d = 0.01;
      const bbox = `${acc.lng - d}%2C${acc.lat - d}%2C${acc.lng + d}%2C${acc.lat + d}`;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${acc.lat}%2C${acc.lng}`;
    }
    return `https://www.openstreetmap.org/export/embed.html?bbox=-1%2C-1%2C1%2C1&layer=mapnik`;
  };

  const googleMapsUrlFor = (acc: AccommodationDoc) => {
    if (acc.lat && acc.lng) {
      return `https://www.google.com/maps/dir/?api=1&destination=${acc.lat},${acc.lng}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(acc.address)}`;
  };

  return (
    <PageContainer>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {myListingsOnly ? "My Accommodation Listings" : "Find Accommodation"}
          </h1>
          <p className="text-muted-foreground">
            {myListingsOnly
              ? "Properties you've listed"
              : "Discover PGs, flats, homes and offices near your campus."}
          </p>
        </div>
        {user && (
          <Button variant="hero" className="gap-2 shrink-0" onClick={() => setShowUpload(true)}>
            <Upload className="h-4 w-4" /> Post Listing
          </Button>
        )}
      </div>

      {/* Search */}
      <Card variant="elevated" className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by location or title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((type) => (
                <Button
                  key={type}
                  variant={activeCategory === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      {loading && (
        <div className="flex items-center justify-center py-20 text-muted-foreground gap-2">
          <Loader2 className="h-5 w-5 animate-spin" /> Loading listings...
        </div>
      )}

      {fetchError && (
        <Card variant="glass" className="text-center py-12">
          <CardContent>
            <p className="text-destructive font-medium">{fetchError}</p>
            <Button variant="outline" className="mt-4" onClick={fetchItems}>Retry</Button>
          </CardContent>
        </Card>
      )}

      {/* Listings Grid */}
      {!loading && !fetchError && (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((acc) => (
            <Card key={acc._id} variant="interactive">
              {/* Map */}
              <div className="h-40 rounded-t-xl overflow-hidden relative group">
                <iframe
                  src={mapUrlFor(acc)}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={googleMapsUrlFor(acc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2"
                >
                  <Button size="sm" variant="secondary" className="gap-1.5 shadow-md">
                    <MapPin className="h-3.5 w-3.5" />
                    Get Directions
                  </Button>
                </a>
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {acc.category}
                    </Badge>
                    <h3 className="font-semibold">{acc.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-primary">₹{acc.rent}/month</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="line-clamp-1">{acc.address}</span>
                </div>

                {acc.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {acc.description}
                  </p>
                )}

                {acc.amenities?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {acc.amenities.map((amenity) => (
                      <Badge key={amenity} variant="outline" className="gap-1">
                        {getAmenityIcon(amenity)}
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <p>Posted by {acc.postedBy?.name || "Unknown"}</p>
                    {acc.postedBy?.college && (
                      <p className="flex items-center gap-1 text-xs">
                        <Building2 className="h-3 w-3" /> {acc.postedBy.college}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <ConnectionButton
                      targetUserId={acc.postedBy._id}
                      contextMessage={`Interested in your accommodation: ${acc.title}`}
                      size="sm"
                      showChat={true}
                    />
                    {user && user.id === acc.postedBy?._id && (
                      <Button variant="outline" size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(acc._id)}
                        disabled={deletingId === acc._id}>
                        {deletingId === acc._id
                          ? <Loader2 className="h-4 w-4 animate-spin" />
                          : <Trash2 className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && !fetchError && filtered.length === 0 && (
        <Card variant="glass" className="text-center py-12">
          <CardContent>
            <Home className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No listings found</h3>
            <p className="text-muted-foreground">
              {myListingsOnly ? "You haven't posted any accommodation listings yet." : "Try adjusting your search or filters."}
            </p>
            {user && (
              <Button variant="hero" className="mt-4 gap-2" onClick={() => setShowUpload(true)}>
                <Upload className="h-4 w-4" /> Post Listing
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Post Listing CTA */}
      {!myListingsOnly && (
        <Card variant="elevated" className="mt-8">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Have a Room to Rent?</h3>
              <p className="text-muted-foreground">
                List your PG, flat, home or office through our platform.
              </p>
            </div>
            <Button variant="hero" className="gap-2 whitespace-nowrap" onClick={() => {
              if (!user) { alert("Please log in to post a listing."); return; }
              setShowUpload(true);
            }}>
              <Home className="h-4 w-4" />
              Post Listing
            </Button>
          </CardContent>
        </Card>
      )}

      {/* ── Upload Modal ── */}
      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card variant="elevated" className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 pb-4 border-b">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" /> Post Accommodation
              </h2>
              <button onClick={() => { setShowUpload(false); setUploadError(""); setGeo(null); }}
                className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleUpload} className="p-6 space-y-4">
              {uploadError && (
                <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                  {uploadError}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="title">Title <span className="text-destructive">*</span></Label>
                <Input id="title" name="title" placeholder="e.g. 2BHK Flat near Garia Station"
                  value={form.title} onChange={handleChange} required />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="category">Category <span className="text-destructive">*</span></Label>
                  <select id="category" name="category" value={form.category} onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select</option>
                    {uploadCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rent">Price / Month (₹) <span className="text-destructive">*</span></Label>
                  <Input id="rent" name="rent" type="number" min="0" step="1"
                    placeholder="e.g. 9000" value={form.rent} onChange={handleChange} required />
                </div>
              </div>

              {/* Address with locate */}
              <div className="space-y-2">
                <Label htmlFor="address">Address <span className="text-destructive">*</span></Label>
                <div className="flex gap-2">
                  <Input id="address" name="address" placeholder="e.g. Garia Station Rd, Kolkata"
                    value={form.address}
                    onChange={(e) => { handleChange(e); setGeoError(""); }}
                    required className="flex-1" />
                  <Button type="button" variant="outline" onClick={handleLocateAddress} disabled={geocoding}
                    title="Search this address">
                    {geocoding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleUseCurrentLocation} disabled={geocoding}
                    title="Use my current location">
                    <Crosshair className="h-4 w-4" />
                  </Button>
                </div>
                {geoError && <p className="text-xs text-destructive">{geoError}</p>}

                {/* Interactive pin map */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    Click on the map or drag the pin to set the exact location.
                  </p>
                  <div ref={mapContainerRef} className="h-48 rounded-lg overflow-hidden border" />
                  {geo && (
                    <p className="text-xs text-green-600 line-clamp-2">📍 {geo.display}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number <span className="text-destructive">*</span></Label>
                <Input id="contact" name="contact" type="tel" placeholder="10-digit mobile number"
                  value={form.contact} onChange={handleChange} maxLength={10} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea id="description" name="description"
                  placeholder="Details about the place, occupancy, preferences, etc."
                  value={form.description} onChange={handleChange} rows={3}
                  className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
              </div>

              {/* Amenities */}
              <div className="space-y-2">
                <Label>Amenities Available</Label>
                <div className="flex flex-wrap gap-2">
                  {availableAmenities.map((a) => (
                    <Badge
                      key={a}
                      variant={selectedAmenities.includes(a) ? "default" : "outline"}
                      className="cursor-pointer gap-1"
                      onClick={() => toggleAmenity(a)}
                    >
                      {getAmenityIcon(a)}
                      {a}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" className="flex-1"
                  onClick={() => { setShowUpload(false); setUploadError(""); setGeo(null); }}>
                  Cancel
                </Button>
                <Button type="submit" variant="hero" className="flex-1" disabled={uploading}>
                  {uploading
                    ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Posting...</>
                    : <><Upload className="h-4 w-4 mr-2" /> Post Listing</>}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </PageContainer>
  );
}