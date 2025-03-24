import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://czheidlsbcafatnvxbrw.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6aGVpZGxzYmNhZmF0bnZ4YnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MTY2OTMsImV4cCI6MjA1NzM5MjY5M30.Sv2Y1yMCDlIJpo1aQHFKs-tMU1XeZKoa_IE2A4vaI28";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
