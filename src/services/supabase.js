import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zjjhxacdpjfitmunzjvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqamh4YWNkcGpmaXRtdW56anZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMzQzMjUsImV4cCI6MjA4NjgxMDMyNX0.eQCCGMaCo8-BCzTy4A91CIX5Ql54FCGvSdiEMtae5cs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
