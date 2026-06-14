import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Users, Search, Building, MessageCircle, UserPlus, UserMinus, Check, Loader2,
} from "lucide-react";

const API_BASE= import.meta.env.VITE_API_BASE  || "http://localhost:5000/api";


interface NetUser {
  _id: string;
  name: string;
  email?: string;
  college?: string;
  course?: string;
  branch?: string;
  year?: number;
  semester?: number;
  role?: string;
}

interface NetworkSectionProps {
  /** true when nested inside another Card (e.g. Chat page tab) */
  embedded?: boolean;
  className?: string;
}

export default function NetworkSection({ embedded = false, className = "" }: NetworkSectionProps) {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState<"friends" | "all">("friends");
  const [friends, setFriends] = useState<NetUser[]>([]);
  const [allUsers, setAllUsers] = useState<NetUser[]>([]);
  const [sentRequests, setSentRequests] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [actingId, setActingId] = useState<string | null>(null);

  const authHeaders = () => ({ Authorization: `Bearer ${token}` });

  const loadAll = async () => {
    setLoading(true);
    try {
      const [friendsRes, allRes, sentRes] = await Promise.all([
        fetch(`${API_BASE}/connections/friends`, { headers: authHeaders(), cache: "no-store" }),
        fetch(`${API_BASE}/users/all`, { headers: authHeaders(), cache: "no-store" }),
        fetch(`${API_BASE}/connections/sent`, { headers: authHeaders(), cache: "no-store" }),
      ]);
      if (friendsRes.ok) setFriends(await friendsRes.json());
      if (allRes.ok) setAllUsers(await allRes.json());
      if (sentRes.ok) setSentRequests(await sentRes.json());
    } catch {
      // silent fail — section just stays empty
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadAll(); }, []);

  const friendIds = new Set(friends.map((f) => f._id));

  const handleConnect = async (userId: string) => {
    setActingId(userId);
    try {
      const res = await fetch(`${API_BASE}/connections/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ recipientId: userId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send request");
      setSentRequests((p) => [...p, userId]);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to send request");
    } finally {
      setActingId(null);
    }
  };

  const handleUnfriend = async (userId: string) => {
    if (!confirm("Remove this friend?")) return;
    setActingId(userId);
    try {
      const res = await fetch(`${API_BASE}/connections/${userId}`, {
        method: "DELETE", headers: authHeaders(),
      });
      if (!res.ok) throw new Error("Failed");
      setFriends((p) => p.filter((f) => f._id !== userId));
    } catch {
      alert("Could not remove friend");
    } finally {
      setActingId(null);
    }
  };

  const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

  const list = tab === "friends" ? friends : allUsers;
  const filtered = list.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    (u.college || "").toLowerCase().includes(search.toLowerCase())
  );

  const header = (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {!embedded && (
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Network
          </CardTitle>
        )}
        <div className="flex gap-2">
          <Button variant={tab === "friends" ? "default" : "outline"} size="sm" onClick={() => setTab("friends")}>
            Friends ({friends.length})
          </Button>
          <Button variant={tab === "all" ? "default" : "outline"} size="sm" onClick={() => setTab("all")}>
            All Users
          </Button>
        </div>
      </div>
      <div className="relative mt-3">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search by name or college..." value={search}
          onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>
    </>
  );

  const body = (
    <>
      {loading && (
        <div className="flex items-center justify-center py-10 text-muted-foreground gap-2">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading...
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="text-center py-10">
          <Users className="mx-auto h-10 w-10 text-muted-foreground/30 mb-2" />
          <p className="text-sm text-muted-foreground">
            {tab === "friends" ? "No friends yet. Connect with users below." : "No users found."}
          </p>
        </div>
      )}

      {!loading && filtered.length > 0 && (
        <div className={cn("grid gap-3", embedded ? "" : "sm:grid-cols-2")}>
          {filtered.map((u) => {
            const isFriend = friendIds.has(u._id);
            const requestSent = sentRequests.includes(u._id);
            return (
              <div key={u._id} className="flex items-center gap-3 rounded-lg border p-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {initials(u.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{u.name}</p>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {u.college && (
                      <Badge variant="outline" className="text-xs gap-1">
                        <Building className="h-3 w-3" /> {u.college}
                      </Badge>
                    )}
                    {u.branch && (
                      <Badge variant="outline" className="text-xs">{u.branch}</Badge>
                    )}
                    {u.semester && (
                      <Badge variant="secondary" className="text-xs">Sem {u.semester}</Badge>
                    )}
                  </div>
                </div>

                {tab === "friends" ? (
                  <div className="flex gap-1.5 shrink-0">
                    <Button size="sm" variant="default" onClick={() => navigate(`/chat/${u._id}`)}>
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleUnfriend(u._id)} disabled={actingId === u._id}>
                      {actingId === u._id ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserMinus className="h-4 w-4" />}
                    </Button>
                  </div>
                ) : (
                  <div className="shrink-0">
                    {isFriend ? (
                      <Badge variant="secondary" className="gap-1">
                        <Check className="h-3 w-3" /> Friends
                      </Badge>
                    ) : requestSent ? (
                      <Badge variant="outline" className="text-xs">Requested</Badge>
                    ) : (
                      <Button size="sm" variant="outline" className="gap-1.5"
                        onClick={() => handleConnect(u._id)} disabled={actingId === u._id}>
                        {actingId === u._id ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
                        Connect
                      </Button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );

  if (embedded) {
    return (
      <div className={cn("px-3 pb-3", className)}>
        {header}
        <div className="mt-3">{body}</div>
      </div>
    );
  }

  return (
    <Card variant="elevated" className={cn("mt-6", className)}>
      <CardHeader>{header}</CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
}