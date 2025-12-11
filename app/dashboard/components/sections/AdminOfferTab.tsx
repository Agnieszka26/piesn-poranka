"use client"
import { SupabaseClient } from "@supabase/supabase-js";
import React, { useEffect } from "react";
import { OfferItem } from "../../types";

const AdminOfferTab = ({
    supabase,
}: {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>;
}) => {
  const [offer, setOffer] = React.useState<OfferItem[]>([]);
  const [loading, setLoading] = React.useState(false);
  async function saveOffer(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase
      .from("site_content")
      .upsert([{ key: "offer", value: offer }], { onConflict: "key" });
    setLoading(false);
    if (error) return alert(error.message);
    alert("Zapisano");
  }

  // useEffect(() => {
  //   setOffer (  supabase.from('site_content').select('value').eq('key', 'offer'))
  // },[]);

  async function getAllOffers() {
    const { data, error } = await supabase
      .from("offers")
      .select("*")
      .order("id", { ascending: false });
    if (error) return alert(error.message);
    setOffer(data);
  }
  useEffect(() => {
    async function fetchData() {
      await getAllOffers();
    }
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <h2 className="font-semibold mb-3">Oferta</h2>
      <form onSubmit={saveOffer} className="flex flex-col gap-2">
        {/* <textarea value={offer} onChange={e=>setOffer(e.target.value)} rows={10} className="border p-2 rounded" /> */}
        <p>formularz do kreaowania oferty</p>
        <button className="px-3 py-2 bg-blue-600 text-white rounded">
          Zapisz
        </button>
      </form>
      <div className="mt-6 text-sm text-gray-500">
        Uwaga: ta aplikacja używa Supabase (Storage + Postgres). Musisz utworzyć
        bucket uploads i tabele zgodnie z instrukcją.
      </div>
      {<p>tu się bedą wyświetlały oferty na strone</p>}
    </div>
  );
};

export default AdminOfferTab;
