import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Eye, EyeOff, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

const branches = [
  "Computer Science", "Information Technology", "Electronics & Communication",
  "Electrical Engineering", "Mechanical Engineering", "Civil Engineering",
  "Chemical Engineering", "Biotechnology", "Other",
];

const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc", "M.Sc", "MBA", "BBA", "B.Com", "Other"];

type FormData = {
  name: string; email: string; password: string;
  phone: string; college: string; course: string;
  branch: string; year: string; semester: string;
};

const EMPTY: FormData = {
  name: "", email: "", password: "",
  phone: "", college: "", course: "",
  branch: "", year: "", semester: "",
};

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 2-step form
  const [form, setForm] = useState<FormData>(EMPTY);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validateStep1 = () => {
    if (!form.name.trim())  return "Full name is required";
    if (!form.email.trim()) return "Email is required";
    if (form.password.length < 6) return "Password must be at least 6 characters";
    if (form.phone && !/^\d{10}$/.test(form.phone)) return "Phone must be 10 digits";
    return "";
  };

  const nextStep = () => {
    const err = validateStep1();
    if (err) { setError(err); return; }
    setError("");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register({
        name: form.name, email: form.email, password: form.password,
        phone: form.phone || undefined,
        college: form.college || undefined,
        course: form.course || undefined,
        branch: form.branch || undefined,
        year: form.year ? parseInt(form.year) : undefined,
        semester: form.semester ? parseInt(form.semester) : undefined,
      });
      navigate("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
              <span className="text-xl font-bold text-primary-foreground">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Campus<span className="text-primary">Connect</span>
            </span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your account and join the community
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>{s}</div>
              {s < 2 && <div className={`h-0.5 w-12 transition-colors ${step > s ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>

        <Card variant="elevated">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <UserPlus className="h-5 w-5 text-primary" />
              {step === 1 ? "Account Details" : "Academic Details"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={step === 1 ? (e) => { e.preventDefault(); nextStep(); } : handleSubmit}
              className="space-y-4">
              {error && (
                <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                  {error}
                </div>
              )}

              {/* ── Step 1: Account info ── */}
              {step === 1 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                    <Input id="name" name="name" placeholder="Ankit Sharma"
                      value={form.name} onChange={handle} required autoComplete="name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                    <Input id="email" name="email" type="email" placeholder="you@college.edu"
                      value={form.email} onChange={handle} required autoComplete="email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password <span className="text-destructive">*</span></Label>
                    <div className="relative">
                      <Input id="password" name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Min. 6 characters"
                        value={form.password} onChange={handle} required
                        autoComplete="new-password" className="pr-10" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
                    </Label>
                    <Input id="phone" name="phone" type="tel" placeholder="10-digit mobile number"
                      value={form.phone} onChange={handle} maxLength={10} />
                  </div>

                  <Button type="submit" variant="hero" className="w-full mt-2">
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </>
              )}

              {/* ── Step 2: Academic info ── */}
              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="college">College / University <span className="text-muted-foreground text-xs">(optional)</span></Label>
                    <Input id="college" name="college" placeholder="e.g. IIT Delhi, VIT Vellore"
                      value={form.college} onChange={handle} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="course">Course <span className="text-muted-foreground text-xs">(optional)</span></Label>
                      <select id="course" name="course" value={form.course} onChange={handle}
                        className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch <span className="text-muted-foreground text-xs">(optional)</span></Label>
                      <select id="branch" name="branch" value={form.branch} onChange={handle}
                        className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        {branches.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="year">Year <span className="text-muted-foreground text-xs">(optional)</span></Label>
                      <select id="year" name="year" value={form.year} onChange={handle}
                        className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        {[1,2,3,4,5,6].map((y) => <option key={y} value={y}>Year {y}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="semester">Semester <span className="text-muted-foreground text-xs">(optional)</span></Label>
                      <select id="semester" name="semester" value={form.semester} onChange={handle}
                        className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select</option>
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map((s) => <option key={s} value={s}>Sem {s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <Button type="button" variant="outline" className="flex-1"
                      onClick={() => { setError(""); setStep(1); }}>
                      <ChevronLeft className="h-4 w-4 mr-1" /> Back
                    </Button>
                    <Button type="submit" variant="hero" className="flex-1" disabled={loading}>
                      {loading ? "Creating..." : "Create Account"}
                    </Button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Your campus companion
          </div>
        </div>
      </div>
    </div>
  );
}