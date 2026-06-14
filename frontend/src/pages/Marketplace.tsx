import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageContainer from "@/components/layout/PageContainer";
import { useAuth } from "@/context/AuthContext";
import {
  Search, Tag, Heart, X, Upload, Loader2,
  Building, Trash2, ImagePlus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ConnectionButton from "@/components/ConnectionButton";

const API_BASE= import.meta.env.VITE_API_BASE  || "http://localhost:5000/api";

const FILE_BASE = API_BASE.replace("/api", "");

interface ListingDoc {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  createdAt: string;
  seller: { _id: string; name: string; college?: string };
}

const categories = ["All", "Books", "Notes", "Electronics", "Clothing", "Other"];
const uploadCategories = ["Books", "Notes", "Electronics", "Clothing", "Other"];

export default function Marketplace({ myListingsOnly = false }: { myListingsOnly?: boolean }) {
  const { user, token } = useAuth();

  const [listings, setListings] = useState<ListingDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [showUpload, setShowUpload] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", price: "", category: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchListings = async () => {
    setLoading(true);
    setFetchError("");
    try {
      const endpoint = myListingsOnly ? `${API_BASE}/listings/my` : `${API_BASE}/listings`;
      const headers: Record<string, string> = {};
      if (myListingsOnly && token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(endpoint, { headers, cache: "no-store" });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      setListings(data);
    } catch (err) {
      setFetchError("Could not load listings. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchListings(); }, [myListingsOnly]);

  const filteredListings = listings.filter((listing) => {
    const q = search.toLowerCase();
    const matchesSearch =
      (listing.title || "").toLowerCase().includes(q) ||
      (listing.description || "").toLowerCase().includes(q) ||
      (listing.seller?.name || "").toLowerCase().includes(q) ||
      (listing.seller?.college || "").toLowerCase().includes(q);
    const matchesCategory = activeCategory === "All" || listing.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) { setUploadError("Title is required"); return; }
    if (!form.price || Number(form.price) < 0) { setUploadError("Valid price is required"); return; }
    if (!form.category) { setUploadError("Please select a category"); return; }

    setUploading(true);
    setUploadError("");
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("price", form.price);
      fd.append("category", form.category);
      if (imageFile) fd.append("image", imageFile);

      const res = await fetch(`${API_BASE}/listings`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Upload failed");

      setListings((p) => [data, ...p]);
      setShowUpload(false);
      setForm({ title: "", description: "", price: "", category: "" });
      setImageFile(null);
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
      const res = await fetch(`${API_BASE}/listings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      setListings((p) => p.filter((l) => l._id !== id));
    } catch {
      alert("Could not delete listing");
    } finally {
      setDeletingId(null);
    }
  };


  return (
    <PageContainer>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {myListingsOnly ? "My Listings" : "Student Marketplace"}
          </h1>
          <p className="text-muted-foreground">
            {myListingsOnly
              ? "Items you've listed for sale"
              : "Buy and sell books, notes, electronics, and more from verified students."}
          </p>
        </div>
        {user && (
          <Button variant="hero" className="gap-2 shrink-0" onClick={() => setShowUpload(true)}>
            <Upload className="h-4 w-4" /> Create Listing
          </Button>
        )}
      </div>

      <Card variant="elevated" className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search listings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {loading && (
        <div className="flex items-center justify-center py-20 text-muted-foreground gap-2">
          <Loader2 className="h-5 w-5 animate-spin" /> Loading listings...
        </div>
      )}

      {fetchError && (
        <Card variant="glass" className="text-center py-12">
          <CardContent>
            <p className="text-destructive font-medium">{fetchError}</p>
            <Button variant="outline" className="mt-4" onClick={fetchListings}>Retry</Button>
          </CardContent>
        </Card>
      )}

      {!loading && !fetchError && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((listing) => (
            <Card key={listing._id} variant="interactive">
              <div className="h-48 rounded-t-xl overflow-hidden bg-secondary">
                {listing.image ? (
                  <img
                    src={`${FILE_BASE}/uploads/${listing.image}`}
                    alt={listing.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Tag className="h-12 w-12 text-muted-foreground/30" />
                  </div>
                )}
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {listing.category}
                    </Badge>
                    <h3 className="font-semibold line-clamp-1">{listing.title}</h3>
                  </div>
                  <span className="text-lg font-bold text-primary">₹{listing.price}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {listing.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{listing.seller?.name || "Unknown"}</span>
                  <span className="flex items-center gap-1">
                    {listing.seller?.college && (
                      <>
                        <Building className="h-3 w-3" />
                        {listing.seller.college}
                      </>
                    )}
                  </span>
                </div>

                <div className="flex gap-2">
                  <ConnectionButton
                    targetUserId={listing.seller._id}
                    contextMessage={`Interested in your listing: ${listing.title}`}
                    size="sm"
                    showChat={true}
                  />
                  {user && user.id === listing.seller?._id ? (
                    <Button variant="outline" size="icon"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleDelete(listing._id)}
                      disabled={deletingId === listing._id}>
                      {deletingId === listing._id
                        ? <Loader2 className="h-4 w-4 animate-spin" />
                        : <Trash2 className="h-4 w-4" />}
                    </Button>
                  ) : (
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && !fetchError && filteredListings.length === 0 && (
        <Card variant="glass" className="text-center py-12">
          <CardContent>
            <Search className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No listings found</h3>
            <p className="text-muted-foreground">
              {myListingsOnly ? "You haven't listed any items yet." : "Try adjusting your search or filters."}
            </p>
            {user && (
              <Button variant="hero" className="mt-4 gap-2" onClick={() => setShowUpload(true)}>
                <Upload className="h-4 w-4" /> Create Listing
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {!myListingsOnly && (
        <Card variant="elevated" className="mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Have something to sell?</h3>
            <p className="text-muted-foreground mb-4">
              List your items and reach thousands of students on campus.
            </p>
            <Button variant="hero" onClick={() => {
              if (!user) { alert("Please log in to create a listing."); return; }
              setShowUpload(true);
            }}>
              Create Listing
            </Button>
          </CardContent>
        </Card>
      )}

      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card variant="elevated" className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 pb-4 border-b">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" /> Create Listing
              </h2>
              <button onClick={() => { setShowUpload(false); setUploadError(""); }}
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
                <Label htmlFor="title">Item Name <span className="text-destructive">*</span></Label>
                <Input id="title" name="title" placeholder="e.g. Scientific Calculator, DSA Notes"
                  value={form.title} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea id="description" name="description"
                  placeholder="Condition, what's included, etc."
                  value={form.description} onChange={handleChange} rows={3}
                  className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹) <span className="text-destructive">*</span></Label>
                  <Input id="price" name="price" type="number" min="0" step="1"
                    placeholder="e.g. 500" value={form.price} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category <span className="text-destructive">*</span></Label>
                  <select id="category" name="category" value={form.category} onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select</option>
                    {uploadCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Photo <span className="text-muted-foreground text-xs">(optional)</span></Label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-input hover:border-primary/50 p-6 cursor-pointer transition-colors bg-secondary/30 hover:bg-secondary/60">
                  {imageFile ? (
                    <div className="text-center">
                      <img src={URL.createObjectURL(imageFile)} alt="preview"
                        className="h-24 w-24 object-cover rounded-lg mx-auto mb-2" />
                      <p className="text-sm font-medium">{imageFile.name}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <ImagePlus className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium">Click to add a photo</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG, JPEG</p>
                    </div>
                  )}
                  <input ref={fileRef} type="file" className="hidden"
                    accept=".png,.jpg,.jpeg"
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" className="flex-1"
                  onClick={() => { setShowUpload(false); setUploadError(""); }}>
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