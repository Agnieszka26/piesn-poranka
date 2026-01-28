"use client";
import React, { useEffect } from "react";
import { OfferItem } from "../../../types";
import OffersTable from "./molecules/Table";
import NewsSections from "@/app/(pub)/components/sections/NewsSections";
import { supabase } from "../../../helpers/supabase-browser";
import NewOfferForm from "./molecules/NewOfferForm";
import { Modal } from "./molecules/Modal";
import EditOfferForm from "./molecules/EditOfferForm";

const AdminOfferTab = () => {
  const [offers, setOffers] = React.useState<OfferItem[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [selectedOffer, setSelectedOffer] = React.useState<OfferItem | null>(
    null,
  );

  async function deleteOffer(id: number, paths: string | null, main_image: string) {
    if (!confirm("Usunąć ofertę?")) return;
    setLoading(true);
    const { error } = await supabase.from("offers").delete().eq("id", id);
    if (paths) {
      const { error: rmErr } = await supabase.storage
        .from("offers-images")
        .remove([paths]);
      setLoading(false);
      if (rmErr) return alert(rmErr.message);
    }
    if (main_image) {
      const { error: rmErr } = await supabase.storage
        .from("offers-images")
        .remove([main_image]);
      setLoading(false);
      if (rmErr) return alert(rmErr.message);
    }
    setLoading(false);
    if (error) return alert(error.message);
    setOffers((prev) => prev && prev.filter((x) => x.id !== id));
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
      <NewOfferForm />
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
