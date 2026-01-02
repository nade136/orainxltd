"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/contexts/supabase-context";
import { aboutContent, AboutContent } from "@/lib/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, Menu, X, Home, LogOut, User, Database, Bell, Image as ImageIcon, FileText, Upload as UploadIcon, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminAboutPage() {
  const router = useRouter();
  const { user, session, loading, signOut } = useSupabase();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [initial, setInitial] = useState<AboutContent | null>(null);
  const [form, setForm] = useState<Partial<AboutContent>>({});
  const [uploading, setUploading] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!loading && !session) router.push("/admin/login");
  }, [loading, session, router]);

  useEffect(() => {
    const load = async () => {
      const { data } = await aboutContent.getAboutContent();
      setInitial(data ?? null);
      setForm(data ?? {});
    };
    if (session) load();
  }, [session]);

  const dirty = useMemo(() => JSON.stringify(slim(initial)) !== JSON.stringify(slim(form as any)), [initial, form]);

  const onChange = (key: keyof AboutContent, value: any) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const uploadImage = async (field: keyof AboutContent, file: File) => {
    try {
      setUploading((u: Record<string, boolean>) => ({ ...u, [field as string]: true }));
      const bucket = "about"; // Create this bucket in Supabase Storage and make it public
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${field}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error: upErr } = await supabase.storage.from(bucket).upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (upErr) throw upErr;
      const { data: pub } = supabase.storage.from(bucket).getPublicUrl(path);
      onChange(field, (pub as any).publicUrl);
    } catch (e) {
      console.error("Upload error", e);
      alert("Upload failed. Ensure the 'about' storage bucket exists and is public.");
    } finally {
      setUploading((u: Record<string, boolean>) => ({ ...u, [field as string]: false }));
    }
  };

  const clearField = (field: keyof AboutContent) => {
    onChange(field, null as any);
  };

  const addValue = () => {
    const list = ((form.values_list as string[] | null) ?? []) as string[];
    onChange("values_list", [...list, ""]);
  };
  const updateValue = (idx: number, v: string) => {
    const list = [ ...(((form.values_list as string[] | null) ?? []) as string[]) ];
    list[idx] = v;
    onChange("values_list", list);
  };
  const removeValue = (idx: number) => {
    const list = [ ...(((form.values_list as string[] | null) ?? []) as string[]) ];
    list.splice(idx, 1);
    onChange("values_list", list);
  };

  const save = async () => {
    setSaving(true);
    await aboutContent.upsertAboutContent(form);
    const { data } = await aboutContent.getAboutContent();
    setInitial(data ?? null);
    setForm(data ?? {});
    setSaving(false);
  };

  const discard = async () => {
    const { data } = await aboutContent.getAboutContent();
    setInitial(data ?? null);
    setForm(data ?? {});
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  if (!session) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 flex">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-teal-800/20 backdrop-blur-lg border-r border-teal-300/20 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-teal-300/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg font-bold text-white">Admin Panel</h1>
            </div>
            <Button onClick={() => setSidebarOpen(false)} variant="ghost" className="text-white hover:bg-white/10 lg:hidden">
              <X className="w-4 h-4" />
            </Button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Main</h3>
              <Button onClick={() => router.push("/admin/dashboard")} variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                <Home className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                <User className="w-4 h-4 mr-3" />
                Users
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                <FileText className="w-4 h-4 mr-3" />
                Projects
              </Button>
            </div>

            <div className="space-y-1 pt-4">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Management</h3>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 bg-white/5">
                <Database className="w-4 h-4 mr-3" />
                About
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                <Bell className="w-4 h-4 mr-3" />
                Notifications
              </Button>
            </div>
          </nav>

          <div className="p-4 border-t border-teal-300/20 space-y-2">
            <Button onClick={() => router.push("/")} variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
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

      <div className="flex-1 flex flex-col">
        <header className="bg-teal-800/20 backdrop-blur-lg border-b border-teal-300/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button onClick={() => setSidebarOpen(true)} variant="ghost" className="text-white hover:bg-white/10 lg:hidden">
                <Menu className="w-4 h-4" />
              </Button>
              <h2 className="text-xl font-bold text-white">About Content</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white">
                <User className="w-4 h-4" />
                <span className="text-sm">{user?.email || "Admin User"}</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6 flex items-center gap-3">
            <Button onClick={discard} variant="ghost" className="text-white hover:bg-white/10" disabled={!dirty || saving}>
              Discard
            </Button>
            <Button onClick={save} className="bg-teal-600 text-white hover:bg-teal-700" disabled={!dirty || saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Hero</CardTitle>
                <CardDescription className="text-gray-300">Title, description and image</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Hero Title"
                  value={form.hero_title ?? ""}
                  onChange={(e) => onChange("hero_title", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Textarea
                  placeholder="Hero Description"
                  value={form.hero_description ?? ""}
                  onChange={(e) => onChange("hero_description", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-gray-300" />
                    <span className="text-sm text-gray-300">Hero Image URL</span>
                  </div>
                  <Input
                    placeholder="https://..."
                    value={form.hero_image_url ?? ""}
                    onChange={(e) => onChange("hero_image_url", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) uploadImage("hero_image_url", f);
                      }}
                      className="text-sm text-gray-300"
                    />
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                      disabled={!!uploading["hero_image_url"]}
                      onClick={() => {}}
                    >
                      <UploadIcon className="w-4 h-4 mr-2" /> {uploading["hero_image_url"] ? "Uploading..." : "Upload"}
                    </Button>
                    {form.hero_image_url && (
                      <Button variant="ghost" className="text-red-400 hover:bg-red-500/10" onClick={() => clearField("hero_image_url")}> 
                        <Trash2 className="w-4 h-4 mr-1" /> Clear
                      </Button>
                    )}
                  </div>
                  {form.hero_image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.hero_image_url} alt="Hero" className="mt-2 rounded-lg max-h-40 object-cover border border-teal-300/20" />
                  ) : null}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Section 1</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Section 1 Title"
                  value={form.section1_title ?? ""}
                  onChange={(e) => onChange("section1_title", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Textarea
                  placeholder="Section 1 Content"
                  value={form.section1_content ?? ""}
                  onChange={(e) => onChange("section1_content", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Input
                  placeholder="Section 1 Image URL"
                  value={form.section1_image_url ?? ""}
                  onChange={(e) => onChange("section1_image_url", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadImage("section1_image_url", f);
                    }}
                    className="text-sm text-gray-300"
                  />
                  <Button variant="ghost" className="text-white hover:bg-white/10" disabled={!!uploading["section1_image_url"]}>
                    <UploadIcon className="w-4 h-4 mr-2" /> {uploading["section1_image_url"] ? "Uploading..." : "Upload"}
                  </Button>
                  {form.section1_image_url && (
                    <Button variant="ghost" className="text-red-400 hover:bg-red-500/10" onClick={() => clearField("section1_image_url")}>
                      <Trash2 className="w-4 h-4 mr-1" /> Clear
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Company Overview</CardTitle>
                <CardDescription className="text-gray-300">Second paragraph and projects completed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Overview - Paragraph 2"
                  value={(form as any).overview_paragraph2 ?? ""}
                  onChange={(e) => onChange("overview_paragraph2" as any, e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Projects Completed</label>
                  <Input
                    type="number"
                    min={0}
                    value={(form as any).projects_completed ?? ""}
                    onChange={(e) => onChange("projects_completed" as any, e.target.value === "" ? null : Number(e.target.value))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Sectors</CardTitle>
                <CardDescription className="text-gray-300">Three cards: title and short description</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {([0,1,2] as const).map((idx) => {
                  const arr = ((form as any).sectors_json ?? []) as Array<any>;
                  const item = arr[idx] ?? { title: "", description: "" };
                  const setItem = (key: "title" | "description", value: string) => {
                    const next = [...arr];
                    next[idx] = { ...(next[idx] ?? {}), [key]: value };
                    onChange("sectors_json" as any, next);
                  };
                  return (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 rounded-lg border border-teal-300/20">
                      <div>
                        <label className="block text-sm text-gray-300 mb-1">Title #{idx + 1}</label>
                        <Input
                          value={item.title ?? ""}
                          onChange={(e) => setItem("title", e.target.value)}
                          placeholder={idx === 0 ? "Commercial" : idx === 1 ? "Industrial" : "Hospitality"}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-1">Description #{idx + 1}</label>
                        <Input
                          value={item.description ?? ""}
                          onChange={(e) => setItem("description", e.target.value)}
                          placeholder={idx === 0 ? "Office buildings, retail spaces" : idx === 1 ? "Manufacturing facilities" : "Hotels, resorts, lodges"}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Section 2</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Section 2 Title"
                  value={form.section2_title ?? ""}
                  onChange={(e) => onChange("section2_title", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Textarea
                  placeholder="Section 2 Content"
                  value={form.section2_content ?? ""}
                  onChange={(e) => onChange("section2_content", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Input
                  placeholder="Section 2 Image URL"
                  value={form.section2_image_url ?? ""}
                  onChange={(e) => onChange("section2_image_url", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadImage("section2_image_url", f);
                    }}
                    className="text-sm text-gray-300"
                  />
                  <Button variant="ghost" className="text-white hover:bg-white/10" disabled={!!uploading["section2_image_url"]}>
                    <UploadIcon className="w-4 h-4 mr-2" /> {uploading["section2_image_url"] ? "Uploading..." : "Upload"}
                  </Button>
                  {form.section2_image_url && (
                    <Button variant="ghost" className="text-red-400 hover:bg-red-500/10" onClick={() => clearField("section2_image_url")}>
                      <Trash2 className="w-4 h-4 mr-1" /> Clear
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Mission & Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Mission Statement"
                  value={form.mission_statement ?? ""}
                  onChange={(e) => onChange("mission_statement", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Textarea
                  placeholder="Vision Statement"
                  value={form.vision_statement ?? ""}
                  onChange={(e) => onChange("vision_statement", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {(((form.values_list as string[] | null) ?? []) as string[]).map((v, i) => (
                    <div key={i} className="flex gap-2">
                      <Input
                        value={v}
                        onChange={(e) => updateValue(i, e.target.value)}
                        placeholder={`Value #${i + 1}`}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      />
                      <Button variant="ghost" className="text-red-400 hover:bg-red-500/10" onClick={() => removeValue(i)}>
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="text-white hover:bg-white/10" onClick={addValue}>
                  Add Value
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Team Intro</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Short team introduction"
                  value={form.team_intro_text ?? ""}
                  onChange={(e) => onChange("team_intro_text", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function slim(v: any) {
  if (!v) return v;
  const { id, created_at, updated_at, ...rest } = v;
  return rest;
}
