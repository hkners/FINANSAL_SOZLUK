import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tbzkzscocrwktwdbukdv.supabase.co"
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiemt6c2NvY3J3a3R3ZGJ1a2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NTQ4MzEsImV4cCI6MjA3MjMzMDgzMX0.OsXuy3-lq5SOm75YQyEB8J84kFpdFXttl7zbEvoE1bQ"

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
