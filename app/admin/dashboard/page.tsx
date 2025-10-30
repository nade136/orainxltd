"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  FileText,
  Settings,
  BarChart3,
  LogOut,
  Home,
  MessageSquare,
  Eye,
  TrendingUp,
  Menu,
  X,
  User,
  Database,
  Shield,
  Bell,
} from "lucide-react";
import { useSupabase } from "@/contexts/supabase-context";
import { database } from "@/lib/database";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({
    stats: { projects: 0, messages: 0, newMessages: 0 },
    recentActivity: { messages: [], projects: [] },
  });
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const router = useRouter();
  const { user, session, loading, signOut } = useSupabase();

  useEffect(() => {
    // Check if user is authenticated
    if (!loading && !session) {
      router.push("/admin/login");
    }
  }, [session, loading, router]);

  useEffect(() => {
    // Load dashboard stats when authenticated
    if (session) {
      loadDashboardStats();
    }
  }, [session]);

  const loadDashboardStats = async () => {
    try {
      const stats = await database.getDashboardStats();
      setDashboardStats(stats);
    } catch (error) {
      console.error("Error loading dashboard stats:", error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    router.push("/admin/login");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

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
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10 bg-white/5"
              >
                <BarChart3 className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <Users className="w-4 h-4 mr-3" />
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
                className="w-full justify-start text-white hover:bg-white/10"
              >
                <MessageSquare className="w-4 h-4 mr-3" />
                Messages
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
              onClick={handleGoHome}
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
            >
              <Home className="w-4 h-4 mr-3" />
              Go to Website
            </Button>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
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
              <h2 className="text-xl font-bold text-white">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white">
                <User className="w-4 h-4" />
                <span className="text-sm">{user?.email || "Admin User"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back, Admin!
            </h2>
            <p className="text-gray-300">
              Here's what's happening with your website today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total Projects
                </CardTitle>
                <FileText className="h-4 w-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {isLoadingStats ? "..." : dashboardStats.stats.projects}
                </div>
                <p className="text-xs text-gray-400">Active projects</p>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total Messages
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {isLoadingStats ? "..." : dashboardStats.stats.messages}
                </div>
                <p className="text-xs text-gray-400">All messages</p>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  New Messages
                </CardTitle>
                <Bell className="h-4 w-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {isLoadingStats ? "..." : dashboardStats.stats.newMessages}
                </div>
                <p className="text-xs text-gray-400">Unread messages</p>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Page Views
                </CardTitle>
                <Eye className="h-4 w-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {isLoadingStats ? "..." : "7,821"}
                </div>
                <p className="text-xs text-gray-400">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage your website content and settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700 text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Manage Projects
                </Button>
                <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  View Messages
                </Button>
                <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700 text-white">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700 text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Site Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription className="text-gray-300">
                  Latest updates and notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-teal-700/20 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm">
                      New contact message received
                    </p>
                    <p className="text-gray-400 text-xs">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-700/20 rounded-lg">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm">
                      Project "Orainx" updated
                    </p>
                    <p className="text-gray-400 text-xs">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-700/20 rounded-lg">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm">
                      Website traffic increased
                    </p>
                    <p className="text-gray-400 text-xs">3 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
