"use client";
import { useState } from "react";
import AdminGalleryTab from "../../components/sections/AdminGaleryTab";
import ButtonTab from "../../components/atoms/ButtonTab";
import AdminReviewTab from "../../components/sections/AdminReviewTab";
import AdminOfferTab from "./AdminNewsTab/AdminNewsTab";
import AdminCalendarTab from "../../components/sections/AdminCalendarTab";
import { redirect } from "next/navigation";
import AdminBackgroundTab from "./AdminBackgroundTab";

export default function MainAdminPage() {
  const [activeTab, setActiveTab] = useState("wieści");
  async function signOut() {
  await fetch('/auth/logout', {
      method: 'POST',
    });
    redirect("/login");
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
          onClick={() => setActiveTab("kalendarz")}
          activeTab={activeTab}
          label={"kalendarz"}
        />
        <ButtonTab
          onClick={() => setActiveTab("tło")}
          activeTab={activeTab}
          label={"tło"}
        />
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
          onClick={() => setActiveTab("wieści")}
          activeTab={activeTab}
          label={"wieści"}
        />
      </div>

      {/* CONTENT */}
      <div
        className={`p-4 bg-gray-50 border border-gray-200 rounded-b-lg ${
          activeTab === "kalendarz" && "bg-primary-green"
        }`}
      >
        {activeTab === "kalendarz" && <AdminCalendarTab  />}
        {activeTab === "tło" && <AdminBackgroundTab />}
        {activeTab === "galeria" && <AdminGalleryTab />}
        {activeTab === "opinie" && <AdminReviewTab  />}
        {activeTab === "wieści" && <AdminOfferTab />}
      </div>
    </div>
  );
}
