"use client";

import { useEffect, useState } from "react";
import { useSupabase } from "@/contexts/supabase-context";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestConnection() {
  const { user, session } = useSupabase();
  const [connectionStatus, setConnectionStatus] = useState("Testing...");
  const [databaseStatus, setDatabaseStatus] = useState("Testing...");

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      // Test basic connection
      const { data, error } = await supabase
        .from("projects")
        .select("count", { count: "exact", head: true });

      if (error) {
        setConnectionStatus(`❌ Error: ${error.message}`);
      } else {
        setConnectionStatus("✅ Connected to Supabase successfully!");
      }

      // Test database access
      if (session) {
        setDatabaseStatus("✅ Authenticated - Database access available");
      } else {
        setDatabaseStatus("⚠️ Not authenticated - Limited access");
      }
    } catch (error) {
      setConnectionStatus(`❌ Connection failed: ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Supabase Connection Test
        </h1>

        <div className="space-y-6">
          <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
            <CardHeader>
              <CardTitle className="text-white">Connection Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{connectionStatus}</p>
            </CardContent>
          </Card>

          <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
            <CardHeader>
              <CardTitle className="text-white">
                Authentication Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{databaseStatus}</p>
              {user && (
                <div className="mt-4 p-4 bg-teal-700/20 rounded-lg">
                  <p className="text-white text-sm">
                    Logged in as: {user.email}
                  </p>
                  <p className="text-gray-300 text-xs">User ID: {user.id}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-teal-800/20 backdrop-blur-lg border-teal-300/20">
            <CardHeader>
              <CardTitle className="text-white">
                Environment Variables
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  <span className="text-teal-300">SUPABASE_URL:</span>{" "}
                  {process.env.NEXT_PUBLIC_SUPABASE_URL
                    ? "✅ Set"
                    : "❌ Missing"}
                </p>
                <p className="text-gray-300">
                  <span className="text-teal-300">SUPABASE_ANON_KEY:</span>{" "}
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
                    ? "✅ Set"
                    : "❌ Missing"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

