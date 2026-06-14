import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PageContainer from "@/components/layout/PageContainer";
import ConnectionButton from "@/components/ConnectionButton";
import NetworkSection from "@/components/NetworkSection";
import {
  User, Mail, GraduationCap, Building, Edit,
  LogOut, ShoppingBag, FileText, MessageCircle, Phone, Home,
  BookOpen, CalendarDays, Save, X, Loader2, ShieldCheck, Users, Search,
  UserPlus, UserMinus, Check,
} from "lucide-react";

const API_BASE= import.meta.env.VITE_API_BASE  || "http://localhost:5000/api";

const branches = [
  "Computer Science", "Information Technology", "Electronics & Communication",
  "Electrical Engineering", "Mechanical Engineering", "Civil Engineering",
  "Chemical Engineering", "Biotechnology", "Other",
];
const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc", "M.Sc", "MBA", "BBA", "B.Com", "Other"];

export default function Profile() {
  const { user, token, logout, refreshUser } = useAuth();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Edit form state — initialised from auth user
  const [form, setForm] = useState({
    name: "", phone: "", college: "", course: "", branch: "", year: "", semester: "",
  });

  // Sync form when user loads / changes
  useEffect(() => {
    if (user) {
      setForm({
        name:     user.name     || "",
        phone:    user.phone    || "",
        college:  user.college  || "",
        course:   user.course   || "",
        branch:   user.branch   || "",
        year:     user.year     ? String(user.year)     : "",
        semester: user.semester ? String(user.semester) : "",
      });
    }
  }, [user]);

  // Fetch fresh profile on mount
  useEffect(() => {
    refreshUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    setSaving(true);
    setSaveError("");
    setSaveSuccess(false);
    try {
      const res = await fetch(`${API_BASE}/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name:     form.name     || undefined,
          phone:    form.phone    || undefined,
          college:  form.college  || undefined,
          course:   form.course   || undefined,
          branch:   form.branch   || undefined,
          year:     form.year     ? Number(form.year)     : undefined,
          semester: form.semester ? Number(form.semester) : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Save failed");
      await refreshUser();
      setEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err: unknown) {
      setSaveError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => { logout(); navigate("/login"); };

  if (!user) return null;

  const initials = user.name.split(" ").map((n) => n[0]).join("").toUpperCase();

  const DetailField = ({
    icon: Icon, label, value, placeholder = "Not set",
  }: { icon: React.ElementType; label: string; value?: string | number; placeholder?: string }) => (
    <div className="space-y-1.5">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
      <div className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2.5">
        <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
        <span className={`text-sm truncate ${!value ? "text-muted-foreground italic" : ""}`}>
          {value || placeholder}
        </span>
      </div>
    </div>
  );

  return (
    <PageContainer>
      <div className="grid gap-6 lg:grid-cols-3">

        {/* ── Left / Main column ── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Profile header card */}
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Avatar className="h-24 w-24 shrink-0">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h1 className="text-2xl font-bold">{user.name}</h1>
                      <p className="text-muted-foreground text-sm">{user.email}</p>
                    </div>
                    {!editing ? (
                      <Button variant="outline" className="gap-2" onClick={() => setEditing(true)}>
                        <Edit className="h-4 w-4" /> Edit Profile
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => { setEditing(false); setSaveError(""); }}
                          disabled={saving}>
                          <X className="h-4 w-4 mr-1" /> Cancel
                        </Button>
                        <Button variant="hero" size="sm" onClick={handleSave} disabled={saving}>
                          {saving ? <Loader2 className="h-4 w-4 mr-1 animate-spin" /> : <Save className="h-4 w-4 mr-1" />}
                          Save
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      {user.role === "admin" ? "Admin" : "Student"}
                    </Badge>
                    {user.college && (
                      <Badge variant="outline" className="gap-1 text-xs">
                        <Building className="h-3 w-3" /> {user.college}
                      </Badge>
                    )}
                    {user.course && (
                      <Badge variant="outline" className="gap-1 text-xs">
                        <GraduationCap className="h-3 w-3" /> {user.course}
                      </Badge>
                    )}
                  </div>

                  {saveSuccess && (
                    <p className="mt-3 text-sm text-green-600 font-medium">✓ Profile updated successfully</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── View mode: Academic Details ── */}
          {!editing && (
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Academic Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <DetailField icon={User}         label="Full Name"  value={user.name} />
                  <DetailField icon={Mail}         label="Email"      value={user.email} />
                  <DetailField icon={Phone}        label="Phone"      value={user.phone} />
                  <DetailField icon={Building}     label="College"    value={user.college} />
                  <DetailField icon={BookOpen}     label="Course"     value={user.course} />
                  <DetailField icon={GraduationCap} label="Branch"   value={user.branch} />
                  <DetailField icon={CalendarDays} label="Year"       value={user.year ? `Year ${user.year}` : undefined} />
                  <DetailField icon={CalendarDays} label="Semester"   value={user.semester ? `Semester ${user.semester}` : undefined} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* ── Edit mode: Form ── */}
          {editing && (
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5 text-primary" />
                  Edit Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {saveError && (
                  <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                    {saveError}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={form.name} onChange={handle} placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" value={form.phone} onChange={handle}
                      placeholder="10-digit number" maxLength={10} type="tel" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="college">College / University</Label>
                    <Input id="college" name="college" value={form.college} onChange={handle}
                      placeholder="e.g. IIT Delhi, VIT Vellore" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <select id="course" name="course" value={form.course} onChange={handle}
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select course</option>
                      {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <select id="branch" name="branch" value={form.branch} onChange={handle}
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select branch</option>
                      {branches.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <select id="year" name="year" value={form.year} onChange={handle}
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select year</option>
                      {[1,2,3,4,5,6].map((y) => <option key={y} value={y}>Year {y}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="semester">Semester</Label>
                    <select id="semester" name="semester" value={form.semester} onChange={handle}
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Select semester</option>
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map((s) => <option key={s} value={s}>Sem {s}</option>)}
                    </select>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  * Email and role cannot be changed here. Contact admin if needed.
                </p>
              </CardContent>
            </Card>
          )}

          {/* ── Network: Friends / All Users ── */}
          <NetworkSection />
        </div>

        {/* ── Right sidebar ── */}
        <aside className="space-y-6">

          {/* Quick info card */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-lg">Account Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium truncate">{user.email}</p>
                </div>
              </div>
              {user.phone && (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{user.phone}</p>
                  </div>
                </div>
              )}
              {user.year && user.semester && (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CalendarDays className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Academic Status</p>
                    <p className="text-sm font-medium">Year {user.year} · Sem {user.semester}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-3"
                onClick={() => navigate("/marketplace/my")}>
                <ShoppingBag className="h-4 w-4" /> My Listings
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3"
                onClick={() => navigate("/notes/my")}>
                <FileText className="h-4 w-4" /> My Notes
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3"
                onClick={() => navigate("/accommodation/my")}>
                <Home className="h-4 w-4" /> My Accommodation
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3"
                onClick={() => navigate("/chat")}>
                <MessageCircle className="h-4 w-4" /> Messages
              </Button>
              <Separator className="my-1" />
              <Button variant="ghost"
                className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={handleLogout}>
                <LogOut className="h-4 w-4" /> Log Out
              </Button>
            </CardContent>
          </Card>

          {/* Verified badge */}
          <Card variant="glass">
            <CardContent className="p-5 text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">
                {user.role === "admin" ? "Admin Account" : "Student Account"}
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                {user.college || "College not set"}
              </p>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                ✓ {user.role === "admin" ? "Admin" : "Verified Student"}
              </Badge>
            </CardContent>
          </Card>
        </aside>
      </div>
    </PageContainer>
  );
}