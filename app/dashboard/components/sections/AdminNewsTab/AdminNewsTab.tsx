"use client";
import React, { useEffect } from "react";
import { NewsItem } from "../../../types";
import NewsTable from "./molecules/Table";
import NewsSections from "@/app/(pub)/components/sections/NewsSections";
import { supabase } from "../../../helpers/supabase-browser";
import NewNewsForm from "./molecules/NewNewsForm";
import { Modal } from "./molecules/Modal";
import EditNewsForm from "./molecules/EditNewsForm";
import toast from "react-hot-toast";


const AdminNewsTab = () => {
  const [news, setNews] = React.useState<NewsItem[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [selectedNews, setSelectedNews] = React.useState<NewsItem | null>(
    null,
  );

async function deleteNews(
  id: number,
  paths: string | string[] | null,
  main_image: string
) {
  if (!confirm("Usunąć ofertę?")) return;

  const toastId = toast.loading("Usuwanie oferty...");

  try {
    setLoading(true);

    const { error } = await supabase.from("offers").delete().eq("id", id);
    if (error) throw error;

    if (paths) {
      const { error: rmErr } = await supabase.storage
        .from("offers-images")
        .remove(typeof paths === "string" ? [paths] : paths);
      if (rmErr) throw rmErr;
    }

    if (main_image) {
      const { error: rmErr } = await supabase.storage
        .from("offers-images")
        .remove([main_image]);
      if (rmErr) throw rmErr;
    }

    setNews((prev) => prev && prev.filter((x) => x.id !== id));

    toast.success("Oferta została usunięta 🗑️", { id: toastId });
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    toast.error(err.message ?? "Nie udało się usunąć oferty", {
      id: toastId,
    });
  } finally {
    setLoading(false);
  }
}

  async function getAllNewss() {
    const { data, error } = await supabase
      .from("offers")
      .select("*")
      .order("id", { ascending: false });
    if (error) return alert(error.message);
    setNews(data);
  }

  useEffect(() => {
    async function fetchData() {
      await getAllNewss();
    }
    fetchData();
  }, []);
  return (
    <div>
      <NewNewsForm onSuccess={getAllNewss} />
      {selectedNews && (
        <Modal onClose={() => setSelectedNews(null)}>
          <EditNewsForm news={selectedNews} />
        </Modal>
      )}
      {loading ? (
        <p>Usuwanie...</p>
      ) : (
        news && (
          <NewsTable
            initialData={news}
            deleteNews={deleteNews}
            onEditNews={setSelectedNews}
          />
        )
      )}
      <p className="text-center my-6 text-2xl">Podgląd: </p>
      {news && <NewsSections news={news} />}
    </div>
  );
};

export default AdminNewsTab;
