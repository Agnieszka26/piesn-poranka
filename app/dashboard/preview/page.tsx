
"use client";
import { useState } from "react";
import AdminGalleryTab from "../components/sections/AdminGaleryTab";
import { createClient } from "@supabase/supabase-js";
import ButtonTab from "../components/atoms/ButtonTab";
import AdminReviewTab from "../components/sections/AdminReviewTab";
import AdminOfferTab from "../components/sections/AdminOfferTab";
import AdminCalendarTab from "../components/sections/AdminCalendarTab";
import { LoginForm } from "../page";
import { redirect } from "next/navigation";

export const supabaseUrl = "https://vumsqpbytakgvqprzfmn.supabase.co";
const supabaseAnonKey = "sb_publishable_JMXfECcnO1jXLHRZEGFI7g__m8bj3sf";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Page() {
  const [activeTab, setActiveTab] = useState("galeria");
  async function signOut() {
    await supabase.auth.signOut();
    redirect("/dashboard")
  }
  return (
    <div className="w-full max-w-7xl mx-auto mt-10">
     <button
                onClick={signOut}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Wyloguj
              </button>
      <div className="flex border-b border-gray-300">
        <ButtonTab
          onClick={() => setActiveTab("galeria")}
          activeTab={activeTab}
          label={"galeria"}
        />
        <ButtonTab
          onClick={() => setActiveTab("opinie")}
          activeTab={activeTab}
          label={"opinie"}
        />
        <ButtonTab
          onClick={() => setActiveTab("oferta")}
          activeTab={activeTab}
          label={"oferta"}
        />
        <ButtonTab
          onClick={() => setActiveTab("kalendarz")}
          activeTab={activeTab}
          label={"kalendarz"}
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-b-lg">
        {activeTab === "galeria" && <AdminGalleryTab supabase={supabase} />}
        {activeTab === "opinie" && <AdminReviewTab supabase={supabase} />}
        {activeTab === "oferta" && <AdminOfferTab supabase={supabase} />}
        {activeTab === "kalendarz" && <AdminCalendarTab supabase={supabase} />}
      </div>
    </div>
  );
}
