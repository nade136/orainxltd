import { supabase } from "./supabase";

// Database table types
export interface Project {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  technologies: string[];
  status: "active" | "completed" | "archived";
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
}

export interface Analytics {
  id: string;
  page_views: number;
  unique_visitors: number;
  date: string;
  created_at: string;
}

export interface Quote {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  created_at: string;
  updated_at: string;
}

// Database operations
export const database = {
  // Projects
  async getProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    return { data, error };
  },

  async createProject(
    project: Omit<Project, "id" | "created_at" | "updated_at">
  ) {
    const { data, error } = await supabase
      .from("projects")
      .insert([project])
      .select();

    return { data, error };
  },

  async updateProject(id: string, updates: Partial<Project>) {
    const { data, error } = await supabase
      .from("projects")
      .update(updates)
      .eq("id", id)
      .select();

    return { data, error };
  },

  async deleteProject(id: string) {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    return { error };
  },

  // Contact Messages
  async getContactMessages() {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    return { data, error };
  },

  async createContactMessage(
    message: Omit<ContactMessage, "id" | "created_at">
  ) {
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([message])
      .select();

    return { data, error };
  },

  async updateContactMessage(id: string, updates: Partial<ContactMessage>) {
    const { data, error } = await supabase
      .from("contact_messages")
      .update(updates)
      .eq("id", id)
      .select();

    return { data, error };
  },

  async deleteContactMessage(id: string) {
    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    return { error };
  },

  // Analytics
  async getAnalytics() {
    const { data, error } = await supabase
      .from("analytics")
      .select("*")
      .order("date", { ascending: false })
      .limit(30);

    return { data, error };
  },

  async createAnalytics(analytics: Omit<Analytics, "id" | "created_at">) {
    const { data, error } = await supabase
      .from("analytics")
      .insert([analytics])
      .select();

    return { data, error };
  },

  // Dashboard Stats
  async getDashboardStats() {
    // Get counts
    const { count: projectsCount } = await supabase
      .from("projects")
      .select("*", { count: "exact", head: true });

    // Quotes are the primary inbox
    const { count: messagesCount } = await supabase
      .from("quotes")
      .select("*", { count: "exact", head: true });

    // Unreplied count (needs attention)
    const { count: newMessagesCount } = await supabase
      .from("quotes")
      .select("*", { count: "exact", head: true })
      .neq("status", "replied");

    // Get recent activity
    const { data: recentMessages } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    const { data: recentProjects } = await supabase
      .from("projects")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(5);

    return {
      stats: {
        projects: projectsCount || 0,
        messages: messagesCount || 0,
        newMessages: newMessagesCount || 0,
      },
      recentActivity: {
        messages: recentMessages || [],
        projects: recentProjects || [],
      },
    };
  },
};

// Quotes CRUD
export const quotes = {
  async getQuotes() {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });
    return { data: data as Quote[] | null, error };
  },
  async createQuote(q: Omit<Quote, "id" | "created_at" | "updated_at">) {
    const { data, error } = await supabase
      .from("quotes")
      .insert([q])
      .select();
    return { data: (data as Quote[] | null)?.[0] ?? null, error };
  },
  async updateQuote(id: string, updates: Partial<Quote>) {
    const { data, error } = await supabase
      .from("quotes")
      .update(updates)
      .eq("id", id)
      .select();
    return { data: (data as Quote[] | null)?.[0] ?? null, error };
  },
  async deleteQuote(id: string) {
    const { error } = await supabase.from("quotes").delete().eq("id", id);
    return { error };
  },
};

