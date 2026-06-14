import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import PageContainer from "@/components/layout/PageContainer";
import { useAuth } from "@/context/AuthContext";
import ConnectionButton from "@/components/ConnectionButton";
import {
  Search, Download, Upload, BookOpen, FileText,
  X, Loader2, IndianRupee, User, Building, BookMarked, Trash2,
  Eye
} from "lucide-react";

const API_BASE= import.meta.env.VITE_API_BASE  || "http://localhost:5000/api";


interface NoteDoc {
  _id: string;
  subject?: string;
  title?: string; // legacy field from old records
  description: string;
  price: number;
  semester?: number;
  branch?: string;
  filename: string;
  originalName: string;
  createdAt: string;
  uploader: { _id: string; name: string; college?: string };
}

const semesters = ["All", "1", "2", "3", "4", "5", "6", "7", "8"];

const branches = [
  "Computer Science", "Information Technology", "Electronics & Communication",
  "Electrical Engineering", "Mechanical Engineering", "Civil Engineering",
  "Chemical Engineering", "Biotechnology", "Other",
];

export default function Notes({ myNotesOnly = false }: { myNotesOnly?: boolean }) {
  const { user, token } = useAuth();

  const [notes, setNotes] = useState<NoteDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [search, setSearch] = useState("");
  const [activeSemester, setActiveSemester] = useState("All");

  // Upload modal state
  const [showUpload, setShowUpload] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    subject: "", description: "", price: "0", semester: "", branch: "",
  });
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // Deleting
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchNotes = async () => {
    setLoading(true);
    setFetchError("");
    try {
      const endpoint = myNotesOnly ? `${API_BASE}/notes/my` : `${API_BASE}/notes`;
      const headers: Record<string, string> = {};
      if (myNotesOnly && token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(endpoint, { headers, cache: "no-store" });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      console.log("[Notes] fetched:", data.length, "notes from", endpoint);
      setNotes(data);
    } catch (err) {
      setFetchError("Could not load notes. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchNotes(); }, [myNotesOnly]);

  // Filter
  const filtered = notes.filter((n) => {
    const q = search.toLowerCase();
    const matchSearch =
      (n.subject || "").toLowerCase().includes(q) ||
      (n.description || "").toLowerCase().includes(q) ||
      (n.uploader?.name || "").toLowerCase().includes(q) ||
      (n.uploader?.college || "").toLowerCase().includes(q);
    const matchSem = activeSemester === "All" || String(n.semester) === activeSemester;
    return matchSearch && matchSem;
  });

  // Upload handlers
  const handleUploadChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setUploadForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) { setUploadError("Please select a file"); return; }
    if (!uploadForm.subject.trim()) { setUploadError("Subject is required"); return; }

    setUploading(true);
    setUploadError("");
    try {
      const fd = new FormData();
      fd.append("file", uploadFile);
      fd.append("subject", uploadForm.subject);
      fd.append("description", uploadForm.description);
      fd.append("price", uploadForm.price || "0");
      if (uploadForm.semester) fd.append("semester", uploadForm.semester);
      if (uploadForm.branch)   fd.append("branch",   uploadForm.branch);

      const res = await fetch(`${API_BASE}/notes`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Upload failed");

      setNotes((p) => [data, ...p]);
      setShowUpload(false);
      setUploadForm({ subject: "", description: "", price: "0", semester: "", branch: "" });
      setUploadFile(null);
    } catch (err: unknown) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this note?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`${API_BASE}/notes/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      setNotes((p) => p.filter((n) => n._id !== id));
    } catch {
      alert("Could not delete note");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <PageContainer>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">
            {myNotesOnly ? "My Notes" : "Notes Repository"}
          </h1>
          <p className="text-muted-foreground">
            {myNotesOnly
              ? "Notes you've uploaded"
              : "Browse and download study materials shared by students."}
          </p>
        </div>
        {user && (
          <Button variant="hero" className="gap-2 shrink-0" onClick={() => setShowUpload(true)}>
            <Upload className="h-4 w-4" /> Upload Notes
          </Button>
        )}
      </div>

      {/* Search + filter */}
      <Card variant="elevated" className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by subject, uploader or college..."
                value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 shrink-0">
              {semesters.map((s) => (
                <Button key={s} variant={activeSemester === s ? "default" : "outline"}
                  size="sm" onClick={() => setActiveSemester(s)} className="whitespace-nowrap">
                  {s === "All" ? "All Sems" : `Sem ${s}`}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      {loading && (
        <div className="flex items-center justify-center py-20 text-muted-foreground gap-2">
          <Loader2 className="h-5 w-5 animate-spin" /> Loading notes...
        </div>
      )}

      {fetchError && (
        <Card variant="glass" className="text-center py-12">
          <CardContent>
            <p className="text-destructive font-medium">{fetchError}</p>
            <Button variant="outline" className="mt-4" onClick={fetchNotes}>Retry</Button>
          </CardContent>
        </Card>
      )}

      {/* Notes list */}
      {!loading && !fetchError && (
        <div className="space-y-4">
          {filtered.map((note) => (
            <Card key={note._id} variant="interactive">
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      {/* Title + badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold">{note.subject || note.title}</h3>
                        {note.semester && (
                          <Badge variant="secondary">Sem {note.semester}</Badge>
                        )}
                        {note.branch && (
                          <Badge variant="outline" className="text-xs">{note.branch}</Badge>
                        )}
                      </div>

                      {/* Description */}
                      {note.description && (
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {note.description}
                        </p>
                      )}

                      {/* Uploader info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {note.uploader?.name || "Unknown"}
                        </span>
                        {note.uploader?.college && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Building className="h-3 w-3" /> {note.uploader.college}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right — actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge
                          className={note.price === 0
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-amber-100 text-amber-700 hover:bg-amber-100"}>
                          {note.price === 0
                            ? "Free"
                            : <span className="text-lg font-bold text-primary">₹{note.price}</span>}
                    </Badge>
                    <ConnectionButton
                      targetUserId={note.uploader?._id}
                      contextMessage={`Interested in your listing: ${note.title}`}
                      size="sm"
                      showChat={true}
                    />
                    <a
                      href={`${API_BASE.replace("/api", "")}/uploads/${note.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={note.originalName}
                    >
                      <Button size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        {note.price === 0 ? "Download" : "Preview"}
                      </Button>
                    </a>
                    {/* Delete — only visible to uploader */}
                    {user && user.id === note.uploader?._id && (
                      <Button size="sm" variant="ghost"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(note._id)}
                        disabled={deletingId === note._id}>
                        {deletingId === note._id
                          ? <Loader2 className="h-4 w-4 animate-spin" />
                          : <Trash2 className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filtered.length === 0 && (
            <Card variant="glass" className="text-center py-14">
              <CardContent>
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
                <h3 className="text-lg font-semibold mb-1">No notes found</h3>
                <p className="text-muted-foreground text-sm">
                  {myNotesOnly ? "You haven't uploaded any notes yet." : "Try a different search or semester."}
                </p>
                {user && (
                  <Button variant="hero" className="mt-4 gap-2" onClick={() => setShowUpload(true)}>
                    <Upload className="h-4 w-4" /> Upload Notes
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* ── Upload Modal ── */}
      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card variant="elevated" className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 pb-4 border-b">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" /> Upload Notes
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
                <Label htmlFor="subject">Subject <span className="text-destructive">*</span></Label>
                <Input id="subject" name="subject" placeholder="e.g. Data Structures, Thermodynamics"
                  value={uploadForm.subject} onChange={handleUploadChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea id="description" name="description"
                  placeholder="What's covered in these notes? Any special topics?"
                  value={uploadForm.description} onChange={handleUploadChange} rows={3}
                  className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <select id="semester" name="semester" value={uploadForm.semester}
                    onChange={handleUploadChange}
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select</option>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((s) => (
                      <option key={s} value={s}>Sem {s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">
                    Price (₹) <span className="text-muted-foreground text-xs">— 0 for free</span>
                  </Label>
                  <Input id="price" name="price" type="number" min="0" step="1"
                    placeholder="0" value={uploadForm.price} onChange={handleUploadChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="branch">Branch</Label>
                <select id="branch" name="branch" value={uploadForm.branch}
                  onChange={handleUploadChange}
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select (defaults to your branch)</option>
                  {branches.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* File picker */}
              <div className="space-y-2">
                <Label>File <span className="text-destructive">*</span></Label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-input hover:border-primary/50 p-6 cursor-pointer transition-colors bg-secondary/30 hover:bg-secondary/60">
                  {uploadFile ? (
                    <div className="text-center">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">{uploadFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(uploadFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium">Click to select file</p>
                      <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, PPT, images</p>
                    </div>
                  )}
                  <input ref={fileRef} type="file" className="hidden"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                    onChange={(e) => setUploadFile(e.target.files?.[0] || null)} />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" className="flex-1"
                  onClick={() => { setShowUpload(false); setUploadError(""); }}>
                  Cancel
                </Button>
                <Button type="submit" variant="hero" className="flex-1" disabled={uploading}>
                  {uploading
                    ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Uploading...</>
                    : <><Upload className="h-4 w-4 mr-2" /> Upload</>}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </PageContainer>
  );
}