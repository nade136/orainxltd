"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSupabase } from "@/contexts/supabase-context";
import { quotes as quotesApi } from "@/lib/database";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Menu,
  X,
  Home,
  LogOut,
  MessageSquare,
  Search,
  Eye,
  Check,
  Reply,
  Trash2,
  User,
  FileText,
  Database,
  Shield,
  Bell,
} from "lucide-react";

interface QuoteItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
}

export default function AdminQuotesPage() {
  const router = useRouter();
  const { user, session, loading, signOut } = useSupabase();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "read" | "replied">("all");
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [selected, setSelected] = useState<QuoteItem | null>(null);

  useEffect(() => {
    if (!loading && !session) {
      router.push("/admin/login");
    }
  }, [loading, session, router]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selected) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [selected]);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await quotesApi.getQuotes();
      if (!error && data) setItems(data as QuoteItem[]);
    };
    if (session) {
      load();
    }
  }, [session]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) return null;

  const filtered = useMemo(() => {
    return items
      .filter((it) => (statusFilter === "all" ? true : it.status === statusFilter))
      .filter((it) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
          it.name.toLowerCase().includes(q) ||
          it.email.toLowerCase().includes(q) ||
          it.subject.toLowerCase().includes(q) ||
          it.message.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  }, [items, query, statusFilter]);

  const markStatus = async (id: string, status: QuoteItem["status"]) => {
    await quotesApi.updateQuote(id, {
      status,
      ...(status === "read" ? { read_at: new Date().toISOString() } : {}),
      ...(status === "replied" ? { replied_at: new Date().toISOString() } : {}),
    } as any);
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, status } : it)));
    if (selected?.id === id) setSelected({ ...selected, status });
  };

  const removeItem = async (id: string) => {
    await quotesApi.deleteQuote(id);
    setItems((prev) => prev.filter((it) => it.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const unrepliedCount = items.filter((i) => i.status !== "replied").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-teal-800/20 backdrop-blur-lg border-r border-teal-300/20 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-teal-300/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg font-bold text-white">Admin Panel</h1>
            </div>
            <Button
              onClick={() => setSidebarOpen(false)}
              variant="ghost"
              className="text-white hover:bg-white/10 lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <Button
                onClick={() => router.push("/admin/dashboard")}
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <Home className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <User className="w-4 h-4 mr-3" />
                Users
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <FileText className="w-4 h-4 mr-3" />
                Projects
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 bg-white/5"
              >
                <MessageSquare className="w-4 h-4 mr-3" />
                Quotes
                <Badge className="ml-auto bg-teal-600 text-white">{unrepliedCount}</Badge>
              </Button>
            </div>

            <div className="space-y-1 pt-4">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Management
              </h3>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <Database className="w-4 h-4 mr-3" />
                Content
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <Shield className="w-4 h-4 mr-3" />
                Security
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <Bell className="w-4 h-4 mr-3" />
                Notifications
              </Button>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-teal-300/20 space-y-2">
            <Button
              onClick={() => router.push("/")}
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
            >
              <Home className="w-4 h-4 mr-3" />
              Go to Website
            </Button>
            <Button
              onClick={async () => {
                await signOut();
                router.push("/admin/login");
              }}
              variant="ghost"
              className="w-full justify-start text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-teal-800/20 backdrop-blur-lg border-b border-teal-300/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setSidebarOpen(true)}
                variant="ghost"
                className="text-white hover:bg-white/10 lg:hidden"
              >
                <Menu className="w-4 h-4" />
              </Button>
              <h2 className="text-xl font-bold text-white">Quotes</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white">
                <User className="w-4 h-4" />
                <span className="text-sm">{user?.email || "Admin User"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Controls */}
          <div className="mb-6 flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "ghost"}
                className={`${statusFilter === "all" ? "bg-teal-600 text-white" : "text-white hover:bg-white/10"}`}
                onClick={() => setStatusFilter("all")}
              >
                All
              </Button>
              <Button
                variant={statusFilter === "new" ? "default" : "ghost"}
                className={`${statusFilter === "new" ? "bg-teal-600 text-white" : "text-white hover:bg-white/10"}`}
                onClick={() => setStatusFilter("new")}
              >
                New
              </Button>
              <Button
                variant={statusFilter === "read" ? "default" : "ghost"}
                className={`${statusFilter === "read" ? "bg-teal-600 text-white" : "text-white hover:bg-white/10"}`}
                onClick={() => setStatusFilter("read")}
              >
                Read
              </Button>
              <Button
                variant={statusFilter === "replied" ? "default" : "ghost"}
                className={`${statusFilter === "replied" ? "bg-teal-600 text-white" : "text-white hover:bg-white/10"}`}
                onClick={() => setStatusFilter("replied")}
              >
                Replied
              </Button>
            </div>
            <div className="relative md:ml-auto w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search quotes..."
                className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* List */}
          <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
            <CardHeader>
              <CardTitle className="text-white">Quote Requests</CardTitle>
              <CardDescription className="text-gray-300">
                Manage incoming requests from your website
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filtered.length === 0 ? (
                <div className="text-center text-gray-300 py-16">No quotes found.</div>
              ) : (
                <div className="divide-y divide-teal-300/20">
                  {filtered.map((it) => (
                    <div key={it.id} className="py-4 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-white font-medium truncate">{it.name}</p>
                          <span className="text-gray-300 text-sm truncate">• {it.email}</span>
                          <Badge
                            className={`${
                              it.status === "new"
                                ? "bg-teal-600 text-white"
                                : it.status === "replied"
                                ? "bg-emerald-600 text-white"
                                : "bg-gray-600 text-white"
                            } ml-2`}
                          >
                            {it.status}
                          </Badge>
                        </div>
                        <p className="text-gray-200 mt-1 truncate">{it.subject}</p>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{it.message}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          variant="ghost"
                          className="text-white hover:bg-white/10"
                          onClick={() => setSelected(it)}
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-white hover:bg-white/10"
                          onClick={() => markStatus(it.id, "read")}
                          title="Mark as read"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-white hover:bg-white/10"
                          onClick={() => markStatus(it.id, "replied")}
                          title="Mark as replied"
                        >
                          <Reply className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-red-400 hover:bg-red-500/10"
                          onClick={() => removeItem(it.id)}
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Detail Drawer (simple modal) */}
          {selected && (
            <div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end lg:items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <div
                className="w-full max-w-3xl bg-gradient-to-br from-teal-950/90 to-teal-800/90 border border-teal-300/20 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-5 border-b border-teal-300/20">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-teal-300" />
                    <h3 className="text-white font-semibold">Quote from {selected.name}</h3>
                    <Badge
                      className={`${
                        selected.status === "new"
                          ? "bg-teal-600 text-white"
                          : selected.status === "replied"
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-600 text-white"
                      } ml-2`}
                    >
                      {selected.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => setSelected(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-5 space-y-4">
                  <div className="text-gray-300 text-sm">From: <span className="text-white">{selected.email}</span></div>
                  <div className="text-gray-300 text-sm">Subject: <span className="text-white">{selected.subject}</span></div>
                  <div className="text-gray-200 whitespace-pre-wrap mt-2">{selected.message}</div>

                  {/* No inline composer; reply via email client */}
                </div>
                <div className="p-5 border-t border-teal-300/20 flex items-center gap-2">
                  <Button className="bg-teal-600 text-white hover:bg-teal-700" onClick={() => markStatus(selected.id, "read")}>Mark as Read</Button>
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => markStatus(selected.id, "replied")}>Mark as Replied</Button>
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => {
                      const subject = `Re: ${selected.subject}`;
                      const body = `Hi ${selected.name},\n\n`;
                      const href = `mailto:${selected.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = href;
                    }}
                  >
                    Reply via Email
                  </Button>
                  <Button className="ml-auto text-red-400 hover:bg-red-500/10" variant="ghost" onClick={() => removeItem(selected.id)}>Delete</Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
