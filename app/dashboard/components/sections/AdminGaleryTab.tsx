"use client"
import { SupabaseClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { GalleryItem } from "../../types";
import GalleryPreview from "@/app/(pub)/components/sections/GalleryPreview";
import { useRouter } from "next/navigation";

type GalleryItemForm = GalleryItem & {
  file: FileList;
};

const AdminGalleryTab = ({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>;
}) => {
  const { register, handleSubmit, reset } = useForm<GalleryItemForm>();
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
 const router = useRouter();

  async function onUploadGallery(form: GalleryItemForm) {
    if (!form.file) return alert("Choose file");
    const file = form.file[0];
    console.log("file", file);
    if (!file?.name) return alert("Choose a file name")
    const filename = `${file.name}`;
    setLoading(true);

    const { data: fileStorage, error: upErr } = await supabase.storage
      .from("gallery-images")
      .upload(`${filename}`, file);
    if (upErr) {
      setLoading(false);
      console.log("error do storage", upErr);
      return alert(upErr.message);
    }

    const { path, } = fileStorage;
    const { data: url } = await supabase.storage
      .from("gallery-images")
      .createSignedUrl(path, 360000);
    const publicPhotoUrl = url?.signedUrl;
    // store metadata
    const { data, error } = await supabase
      .from("gallery")
      .insert([
        {
          name_image: form.name_image,
          description: form.description || "",
          image_url: publicPhotoUrl,
        },
      ])
      .single();
      console.log("error", error);
      if (error) return alert(error.message);
      reset();
      setLoading(false);
      router.refresh();
  }

  async function deleteGallery(id: number, path: string) {
    if (!confirm("Usuń zdjęcie?")) return;
    setLoading(true);
    const { error } = await supabase.from("gallery").delete().eq("id", id);
    const { error: rmErr } = await supabase.storage
      .from("gallery-image")
      .remove([path]);
    setLoading(false);
    if (error) return alert(error.message);
    setGallery((prev) => prev.filter((x) => x.id !== id));
  }
  async function getAllGallery() {
    const data = await supabase.from("gallery").select("*");
    console.log(data);
    if (data.error) return alert(data.error.message);
    setGallery(data.data);
  }
  useEffect(() => {
    async function fetchData() {
      await getAllGallery();
    }
    fetchData();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onUploadGallery)}
        className="flex flex-col gap-2 mb-4"
      >
        <input
          {...register("name_image")}
          placeholder="Tytuł"
          className="border p-2 rounded"
        />
        <input
          {...register("description")}
          placeholder="Opis"
          className="border p-2 rounded"
        />
        <input
          {...register("file")}
          type="file"
          accept="image/*"
          className="border p-2 rounded"
        />
        <button
          className="px-3 py-2 bg-indigo-600 text-white rounded"
          disabled={loading}
        >
          Dodaj zdjęcie
        </button>
      </form>

      {loading ? (
        <p> Chwilkę... </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((item) => (
            <div key={item?.id} className="border rounded overflow-hidden">
              {item?.image_url ? (
                <Image
                  src={item.image_url}
                  alt={item.description}
                  className="w-full h-40 object-cover"
                  width={1200}
                  height={1200}
                />
              ) : (
                <div className="h-40 bg-gray-100" />
              )}
              <div className="p-2">
                <div className="font-medium">{item?.name_image ?? ""}</div>
                <div className="text-sm text-gray-600">
                  {item?.description ?? ""}
                </div>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => deleteGallery(item.id, item.image_url)}
                    className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Usuń
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}
      <hr className="py-4"/>
      <p className="mx-auto text-2xl text-center p-8">Podgląd zdjęć w galerii na stronie</p>
      <GalleryPreview galleryImages={gallery} />
    </div>
  );
};

export default AdminGalleryTab;
