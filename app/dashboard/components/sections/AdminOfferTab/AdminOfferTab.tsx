"use client";
import React, { useEffect } from "react";
import { OfferItem } from "../../../types";
import OffersTable from "./molecules/Table";
import NewsSections from "@/app/(pub)/components/sections/NewsSections";
import { supabase } from "../../../helpers/supabase-browser";
import NewOfferForm from "./molecules/NewOfferForm";
import { Modal } from "./molecules/Modal";
import EditOfferForm from "./molecules/EditOfferForm";
import toast from "react-hot-toast";


const AdminOfferTab = () => {
  const [offers, setOffers] = React.useState<OfferItem[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [selectedOffer, setSelectedOffer] = React.useState<OfferItem | null>(
    null,
  );

async function deleteOffer(
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

    setOffers((prev) => prev && prev.filter((x) => x.id !== id));

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

  async function getAllOffers() {
    const { data, error } = await supabase
      .from("offers")
      .select("*")
      .order("id", { ascending: false });
    if (error) return alert(error.message);
    setOffers(data);
  }

  useEffect(() => {
    async function fetchData() {
      await getAllOffers();
    }
    fetchData();
  }, []);

  return (
    <div>
      <NewOfferForm onSuccess={getAllOffers} />
      {selectedOffer && (
        <Modal onClose={() => setSelectedOffer(null)}>
          <EditOfferForm offer={selectedOffer} />
        </Modal>
      )}
      {loading ? (
        <p>Usuwanie...</p>
      ) : (
        offers && (
          <OffersTable
            initialData={offers}
            deleteOffer={deleteOffer}
            onEditOffer={setSelectedOffer}
          />
        )
      )}
      <p className="text-center my-6 text-2xl">Podgląd: </p>
      {offers && <NewsSections offers={offers} />}
    </div>
  );
};

export default AdminOfferTab;
