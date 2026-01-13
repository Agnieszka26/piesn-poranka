"use client";
import { SupabaseClient } from "@supabase/supabase-js";
import React, { useEffect } from "react";
import { OfferItem } from "../../types";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import OffersTable from "../molecules/Table";
import NewsSections from "@/app/(pub)/components/sections/NewsSections";

type OfferItemForm = OfferItem & {
  file: FileList;
};

const AdminOfferTab = ({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>;
}) => {
  const { register, handleSubmit, reset } = useForm<OfferItemForm>();
  const [offer, setOffer] = React.useState<OfferItem[]| null>(null);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  
  async function deleteOffer(id: number, path: string) {
    if (!confirm("Usunąć ofertę?")) return;
    setLoading(true);
    const { error } = await supabase.from("offers").delete().eq("id", id);
    const { error: rmErr } = await supabase.storage
      .from("offers-images")
      .remove([path]);
    setLoading(false);
    if (error) return alert(error.message);

    setOffer((prev) => 
      prev && 
      prev.filter((x) => x.id !== id));
  }

  async function onUploadOffer(form: OfferItemForm) {
    if (!form.file) return alert("Choose file");
    const file = form.file[0];
    console.log("file", file);
    if (!file?.name) return alert("Choose a file name");
    const filename = `${file.name}`;
    setLoading(true);

    const { data: fileStorage, error: upErr } = await supabase.storage
      .from("offers-images")
      .upload(`${filename}`, file);
    if (upErr) {
      setLoading(false);
      console.log("error do storage", upErr);
      return alert(upErr.message);
    }

    const { path } = fileStorage;
    const { data: url } = await supabase.storage
      .from("offers-images")
      .createSignedUrl(path, 360000);
    const publicPhotoUrl = url?.signedUrl;
    console.log('publicPhotoUrl', publicPhotoUrl)
    // store metadata
    const { data, error } = await supabase
      .from("offers")
      .insert([
        {
          title: form.title,
          image: publicPhotoUrl,
          description: form.description || "",
          subtitle: form.subtitle,
        },
      ])
      .single();
    console.log("error", error);
    if (error) return alert(error.message);
    reset();
    setLoading(false);
    router.refresh();
  }

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
      <h2 className="font-semibold mb-3">Utwórz nowy post, który będzie się wyświetlał na stronie.</h2>
      <form
        onSubmit={handleSubmit(onUploadOffer)}
        className="flex flex-col gap-2"
      >
        <input
          {...register("title")}
          placeholder="Tytuł"
          className="border p-2 rounded"
        />
        <input
          {...register("subtitle")}
          placeholder="Podtytuł"
          className="border p-2 rounded"
        />
        <textarea
          {...register("description")}
          placeholder="Treść"
          className="border p-2 rounded"
          rows={10}
        />
        <label htmlFor="image">Obrazek</label>
        <input
          id="image"
          {...register("file")}
          type="file"
          accept="image/*"
          className="border p-2 rounded"
        />
       
        
        <button className="px-3 py-2 bg-blue-600 text-white rounded">
          Zapisz
        </button>
      </form>
    {offer &&  <OffersTable initialData={offer} deleteOffer={deleteOffer}/>}
      <p className="text-center my-6 text-2xl">Podgląd: </p>
      {offer && <NewsSections offers={offer}/> }
      


    </div>
  );
};

export default AdminOfferTab;
