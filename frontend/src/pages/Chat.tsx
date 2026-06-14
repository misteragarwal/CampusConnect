import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PageContainer from "@/components/layout/PageContainer";
import { Search, Send, MessageCircle, Check, X, Building, GraduationCap, Loader2, UserPlus, Users} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import NetworkSection from "@/components/NetworkSection";

const API_BASE = "http://localhost:5000/api";

interface Friend {
  _id: string;
  name: string;
  college?: string;
  course?: string;
  branch?: string;
  year?: number;
  semester?: number;
}

interface ConnRequest {
  _id: string;
  message?: string;
  createdAt: string;
  from: Friend;
}

interface MessageDoc {
  _id: string;
  sender: string;
  recipient: string;
  text: string;
  createdAt: string;
}

type Tab = "chats" | "requests" | "network";

export default function Chat() {
  const { peerId } = useParams();
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [tab, setTab] = useState<Tab>("chats");
  const [friends, setFriends] = useState<Friend[]>([]);
  const [requests, setRequests] = useState<ConnRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [messages, setMessages] = useState<MessageDoc[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [searchPeer, setSearchPeer] = useState("");
  const [chatError, setChatError] = useState("");
  const [unreadFrom, setUnreadFrom] = useState<Set<string>>(new Set());

  const [actingId, setActingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const authHeaders = () => ({ Authorization: `Bearer ${token}` });

  const fetchFriends = async () => {
    const res = await fetch(`${API_BASE}/connections/friends`, { headers: authHeaders(), cache: "no-store" });
    if (res.ok) setFriends(await res.json());
  };

  const fetchRequests = async () => {
    const res = await fetch(`${API_BASE}/connections/requests`, { headers: authHeaders(), cache: "no-store" });
    if (res.ok) setRequests(await res.json());
  };

  const loadAll = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      await Promise.all([fetchFriends(), fetchRequests()]);
    } catch {
      // ignore failures on silent background polls
    } finally {
      if (!silent) setLoading(false);
    }
  };

  // Initial load on mount
  useEffect(() => { loadAll(); }, []);

  // Poll for new friends / connection requests every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      loadAll(true); // silent = no loading spinner
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // If peerId in URL, select that friend (once friends are loaded)
  useEffect(() => {
    if (peerId && friends.length > 0) {
      const f = friends.find((fr) => fr._id === peerId);
      if (f) setSelectedFriend(f);
    }
  }, [peerId, friends]);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  const fetchUnread = async () => {
    try {
      const res = await fetch(`${API_BASE}/messages/unread`, { headers: authHeaders(), cache: "no-store" });
      if (res.ok) {
        const ids: string[] = await res.json();
        setUnreadFrom(new Set(ids));
      }
    } catch {
      // ignore on silent poll
    }
  };

  useEffect(() => {
    fetchUnread();
    const interval = setInterval(fetchUnread, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async (friendId: string, silent = false) => {
    if (!silent) {
      setLoadingMessages(true);
      setChatError("");
    }
    try {
      const res = await fetch(`${API_BASE}/messages/${friendId}`, { headers: authHeaders(), cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load messages");
      setMessages(data);
      if (silent) setChatError(""); // clear any stale error once a poll succeeds
    } catch (err) {
      if (!silent) {
        setChatError(err instanceof Error ? err.message : "Failed to load messages");
        setMessages([]);
      }
      // on a silent poll failure, just skip this round — don't disrupt the UI
    } finally {
      if (!silent) setLoadingMessages(false);
    }
  };

  // Initial load when a conversation is opened
  useEffect(() => {
    if (selectedFriend) {
      fetchMessages(selectedFriend._id);
      setUnreadFrom((prev) => {
        const next = new Set(prev);
        next.delete(selectedFriend._id);
        return next;
      });
    }
  }, [selectedFriend]);

  // Poll for new messages every 3 seconds while a conversation is open
  useEffect(() => {
    if (!selectedFriend) return;

    const interval = setInterval(() => {
      fetchMessages(selectedFriend._id, true); // silent = no loading spinner / no error clear UI
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedFriend]);

  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim() || !selectedFriend) return;
    setSending(true);
    try {
      const res = await fetch(`${API_BASE}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ recipientId: selectedFriend._id, text: newMessage.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setMessages((p) => [...p, data]);
      setNewMessage("");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAccept = async (reqId: string) => {
    setActingId(reqId);
    try {
      const res = await fetch(`${API_BASE}/connections/${reqId}/accept`, {
        method: "PUT", headers: authHeaders(),
      });
      if (!res.ok) throw new Error("Failed");
      await loadAll();
    } catch {
      alert("Could not accept request");
    } finally {
      setActingId(null);
    }
  };

  const handleReject = async (reqId: string) => {
    setActingId(reqId);
    try {
      const res = await fetch(`${API_BASE}/connections/${reqId}/reject`, {
        method: "PUT", headers: authHeaders(),
      });
      if (!res.ok) throw new Error("Failed");
      await loadAll();
    } catch {
      alert("Could not reject request");
    } finally {
      setActingId(null);
    }
  };

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(searchPeer.toLowerCase())
  );

  const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

  if (!user) return null;

  return (
    <PageContainer className="h-[calc(100vh-8rem)]">
      <div className="grid h-full gap-6 lg:grid-cols-[340px,1fr]">
        {/* Left panel — Chats / Requests / Network */}
        <Card variant="elevated" className="flex flex-col overflow-hidden">
          <CardHeader className="pb-3">
            <div className="grid grid-cols-3 items-center gap-2">
              <Button
                variant={tab === "chats" ? "default" : "ghost"}
                size="sm"
                className="flex-1 relative"
                onClick={() => setTab("chats")}
              >
                <MessageCircle className="h-4 w-4 mr-1.5" /> Chats
                {unreadFrom.size > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 p-0 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
                    {unreadFrom.size}
                  </Badge>
                )}
              </Button>
              <Button
                variant={tab === "requests" ? "default" : "ghost"}
                size="sm"
                className="flex-1 relative"
                onClick={() => setTab("requests")}
              >
                <UserPlus className="h-4 w-4 mr-1.5" /> Requests
                {requests.length > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 p-0 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
                    {requests.length}
                  </Badge>
                )}
              </Button>
              <Button
                variant={tab === "network" ? "default" : "ghost"}
                size="sm"
                className="flex-1"
                onClick={() => setTab("network")}
              >
                <Users className="h-4 w-4 mr-1.5" /> Network
              </Button>
            </div>

            {tab === "chats" && (
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search friends..."
                  value={searchPeer}
                  onChange={(e) => setSearchPeer(e.target.value)}
                  className="pl-10"
                />
              </div>
            )}
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-0">
            {loading && (
              <div className="flex items-center justify-center py-10 text-muted-foreground gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading...
              </div>
            )}
            {!loading && tab === "network" && (
              <NetworkSection embedded />
            )}

            {/* ── Chats tab ── */}
            {!loading && tab === "chats" && (
              <div className="space-y-1 px-3 pb-3">
                {filteredFriends.length === 0 && (
                  <div className="text-center py-10 px-4">
                    <MessageCircle className="mx-auto h-10 w-10 text-muted-foreground/30 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      No friends yet. Go to your Profile to connect with other students.
                    </p>
                  </div>
                )}
                {filteredFriends.map((friend) => (
                  <button
                    key={friend._id}
                    onClick={() => { setSelectedFriend(friend); navigate(`/chat/${friend._id}`); }}
                    className={cn(
                      "w-full flex items-center gap-3 rounded-lg p-3 text-left transition-colors",
                      selectedFriend?._id === friend._id
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-secondary"
                    )}
                  >
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {initials(friend.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="font-medium truncate">{friend.name}</div>
                        {unreadFrom.has(friend._id) && (
                          <span className="h-2 w-2 rounded-full bg-destructive shrink-0" />
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {friend.college || "—"}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* ── Requests tab ── */}
            {!loading && tab === "requests" && (
              <div className="space-y-2 px-3 pb-3">
                {requests.length === 0 && (
                  <div className="text-center py-10 px-4">
                    <UserPlus className="mx-auto h-10 w-10 text-muted-foreground/30 mb-2" />
                    <p className="text-sm text-muted-foreground">No pending connection requests.</p>
                  </div>
                )}
                {requests.map((req) => (
                  <Card key={req._id} variant="default" className="p-3">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {initials(req.from.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{req.from.name}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {req.from.college && (
                            <Badge variant="outline" className="text-xs gap-1">
                              <Building className="h-3 w-3" /> {req.from.college}
                            </Badge>
                          )}
                          {req.from.branch && (
                            <Badge variant="outline" className="text-xs gap-1">
                              <GraduationCap className="h-3 w-3" /> {req.from.branch}
                            </Badge>
                          )}
                          {req.from.semester && (
                            <Badge variant="secondary" className="text-xs">Sem {req.from.semester}</Badge>
                          )}
                        </div>
                        {req.message && (
                          <p className="text-xs text-muted-foreground mt-1.5 italic">"{req.message}"</p>
                        )}
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" className="gap-1 flex-1" onClick={() => handleAccept(req._id)}
                            disabled={actingId === req._id}>
                            {actingId === req._id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />}
                            Accept
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1 flex-1" onClick={() => handleReject(req._id)}
                            disabled={actingId === req._id}>
                            <X className="h-3.5 w-3.5" /> Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card variant="elevated" className="flex flex-col overflow-hidden">
          {selectedFriend ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {initials(selectedFriend.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{selectedFriend.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {selectedFriend.college || ""}
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {loadingMessages && (
                  <div className="flex items-center justify-center py-10 text-muted-foreground gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Loading messages...
                  </div>
                )}
                {chatError && (
                  <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive text-center">
                    {chatError}
                  </div>
                )}
                {!loadingMessages && !chatError && messages.length === 0 && (
                  <div className="text-center py-10 text-sm text-muted-foreground">
                    No messages yet. Say hi! 👋
                  </div>
                )}
                {messages.map((message) => {
                  const fromMe = message.sender === user.id;
                  return (
                    <div key={message._id} className={cn("flex", fromMe ? "justify-end" : "justify-start")}>
                      <div className={cn(
                        "max-w-[70%] rounded-2xl px-4 py-2",
                        fromMe ? "bg-primary text-primary-foreground rounded-br-md" : "bg-secondary rounded-bl-md"
                      )}>
                        <p className="text-sm">{message.text}</p>
                        <p className={cn("text-xs mt-1", fromMe ? "text-primary-foreground/70" : "text-muted-foreground")}>
                          {new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-1"
                    disabled={!!chatError}
                  />
                  <Button onClick={handleSend} className="gap-2" disabled={sending || !!chatError}>
                    {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    Send
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
                  <Send className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-1">Select a conversation</h3>
                <p className="text-sm text-muted-foreground">
                  Choose a friend to start chatting
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </PageContainer>
  );
}