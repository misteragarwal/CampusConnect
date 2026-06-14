import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { UserPlus, MessageCircle, Clock, UserCheck, Loader2, UserMinus } from "lucide-react";

const API_BASE = "http://localhost:5000/api";

type ConnStatus = "none" | "pending-out" | "pending-in" | "accepted";

interface Props {
  targetUserId: string;
  contextMessage?: string; // optional message e.g. "Interested in your listing: DSA Notes"
  size?: "sm" | "default";
  showChat?: boolean; // show "Chat" button when connected
  showUnfriend?: boolean; // show "Unfriend" button when connected
}

export default function ConnectionButton({
  targetUserId, contextMessage, size = "default", showChat = true, showUnfriend = false
}: Props) {
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const [status, setStatus] = useState<ConnStatus>("none");
  const [connectionId, setConnectionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState(false);

  const headers = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const fetchStatus = async () => {
    if (!user || !token) { setLoading(false); return; }
    try {
      const res = await fetch(`${API_BASE}/connections/status/${targetUserId}`, {
        headers: { Authorization: `Bearer ${token}` }, cache: "no-store",
      });
      const data = await res.json();
      if (data.status === "accepted") {
        setStatus("accepted");
        setConnectionId(data.connectionId);
      } else if (data.status === "pending") {
        setStatus(data.direction === "outgoing" ? "pending-out" : "pending-in");
        setConnectionId(data.connectionId);
      } else {
        setStatus("none");
        setConnectionId(null);
      }
    } catch {
      setStatus("none");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStatus(); }, [targetUserId]);

  const sendRequest = async () => {
    setActing(true);
    try {
      const res = await fetch(`${API_BASE}/connections/request`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ recipientId: targetUserId, message: contextMessage || "" }),
      });
      if (res.ok) { setStatus("pending-out"); }
      else {
        const d = await res.json();
        alert(d.message || "Could not send request");
      }
    } catch { alert("Network error"); }
    finally { setActing(false); }
  };

  const unfriend = async () => {
    if (!confirm("Remove this connection?")) return;
    setActing(true);
    try {
      const res = await fetch(`${API_BASE}/connections/${targetUserId}`, {
        method: "DELETE", headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) { setStatus("none"); setConnectionId(null); }
    } catch { alert("Could not remove connection"); }
    finally { setActing(false); }
  };

  const cancelRequest = async () => {
    setActing(true);
    try {
      const res = await fetch(`${API_BASE}/connections/${targetUserId}`, {
        method: "DELETE", headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) { setStatus("none"); setConnectionId(null); }
    } catch { alert("Could not cancel request"); }
    finally { setActing(false); }
  };

  if (user && user.id === targetUserId) return null; // don't show on your own listings

if (!user || !token) {
  return (
    <Button size={size} variant="outline" className="gap-2" onClick={() => navigate("/login")}>
      <UserPlus className="h-4 w-4" /> Sign in to Connect
    </Button>
  );
}

if (loading) return <Button size={size} variant="outline" disabled><Loader2 className="h-4 w-4 animate-spin" /></Button>;

  if (status === "accepted") {
  return (
    <div className="flex gap-2">
      {showChat && (
        <Button size={size} className="gap-2" onClick={() => navigate(`/chat/${targetUserId}`)}>
          <MessageCircle className="h-4 w-4" /> Chat
        </Button>
      )}
      {showUnfriend && (
        <Button size={size} variant="outline" className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={unfriend} disabled={acting}>
          {acting ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserMinus className="h-4 w-4" />}
          Unfriend
        </Button>
      )}
    </div>
  );
}

  if (status === "pending-out") {
    return (
      <Button size={size} variant="outline" className="gap-2" onClick={cancelRequest} disabled={acting}>
        {acting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Clock className="h-4 w-4" />}
        Requested
      </Button>
    );
  }

  if (status === "pending-in") {
    return (
      <Button size={size} variant="outline" className="gap-2" onClick={() => navigate("/chat?tab=requests")}>
        <UserCheck className="h-4 w-4" /> Respond
      </Button>
    );
  }

  return (
    <Button size={size} variant="hero" className="gap-2" onClick={sendRequest} disabled={acting}>
      {acting ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
      Connect
    </Button>
  );
}