"use client";
import { useState } from "react";
import AdminGalleryTab from "../../components/sections/AdminGaleryTab";
import { SupabaseClient } from "@supabase/supabase-js";
import ButtonTab from "../../components/atoms/ButtonTab";
import AdminReviewTab from "../../components/sections/AdminReviewTab";
import AdminOfferTab from "../../components/sections/AdminOfferTab";
import AdminCalendarTab from "../../components/sections/AdminCalendarTab";
import { redirect } from "next/navigation";

export default function MainAdminPage({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>;
}) {
  const [activeTab, setActiveTab] = useState("galeria");
  async function signOut() {
    await supabase.auth.signOut();
    redirect("/dashboard");
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
