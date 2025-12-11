
"use client"
import AdminGalleryTab from "../components/sections/AdminGaleryTab";
import { createClient } from "@supabase/supabase-js";
import MainAdminPage from "../components/sections/MainAdminPage";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?? ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Page() {

  return (
   <MainAdminPage supabase={supabase} />
  );
}
