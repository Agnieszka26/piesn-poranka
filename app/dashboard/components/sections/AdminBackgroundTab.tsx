"use client";
import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HeroImageItem } from "../../types";

type HeroImageItemForm = HeroImageItem & {
  file: FileList;
};
const AdminBackgroundTab = ({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>;
}) => {
  const { register, handleSubmit, reset } = useForm<HeroImageItemForm>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string>("");
  const [gallery, setGallery] = useState<HeroImageItem[]>([]);
  const router = useRouter();
  async function getAllGallery() {
    const data = await supabase.from("hero_background").select("*");

    if (data.error) return alert(data.error.message);

    const sorted = data.data.sort((a, b) => {
      if (a.status === "selected" && b.status !== "selected") return -1;
      if (a.status !== "selected" && b.status === "selected") return 1;
      return 0;
    });
    setGallery(sorted);
  }
  async function onUploadHeroImage(form: HeroImageItemForm) {
    if (!form.file) return alert("Choose file");
    const file = form.file[0];
    console.log("file", file);
    if (!file?.name) return alert("Choose a file name");
    const filename = `${file.name}`;
    setLoading(true);

    const { data: fileStorage, error: upErr } = await supabase.storage
      .from("hero-images")
      .upload(`${filename}`, file);
    if (upErr) {
      setLoading(false);
      console.log("error do storage", upErr);
      return alert(upErr.message);
    }

    const { path } = fileStorage;
    const { data: url } = await supabase.storage
      .from("hero-images")
      .createSignedUrl(path, 360000);
    const publicPhotoUrl = url?.signedUrl;
    // store metadata
    const { data, error } = await supabase
      .from("hero_background")
      .insert([
        {
          image_name: form.image_name,
          image_url: publicPhotoUrl,
        },
      ])
      .single();
    console.log("error", error);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Dodano zdjęcie ");
      setGallery([]);
      await getAllGallery();
      setLoading(false);
      reset();
      router.refresh();
    }
  }

  const changeStatus = async (id: number, status: "disabled" | "selected") => {
    const { data, error } = await supabase
      .from("hero_background")
      .update({ status: status })
      .eq("id", id)
      .select();
    if (error) {
      setError(error.message);
    } else {
      setSuccess(status==="selected" ? "Wybrano zdjęcie" : "Odrzucono zdjęcie");
      setGallery([]);
      await getAllGallery();
      setLoading(false);

      router.refresh();
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getAllGallery();
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="py-4">
        <form
          onSubmit={handleSubmit(onUploadHeroImage)}
          className="flex flex-col gap-2 mb-4"
        >
          <input
            {...register("image_name")}
            placeholder="Nazwa"
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
            {loading ? "Zapisywanie..." : "  Dodaj zdjęcie"}
          </button>
          {error && <p className="text-red-500 mx-4">{error}</p>}
          {success && <p className="mx-4">{success} ✅</p>}
        </form>
        <p className="mx-auto text-2xl text-center p-4">Dostępne zdjęcia: </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map(({ image_name, image_url, id, status }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-1"
            >
              <div
                key={id}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {status === "selected" && (
                  <div className="p-4 bg-primary-green text-white flex justify-between items-center">
                    <p>Wybrane na główną</p>{" "}
                    <button
                      className="px-3 py-2 bg-indigo-600 text-white rounded z-50 cursor-pointer"
                      onClick={() => changeStatus(id, "disabled")}
                    >
                      {" "}
                      Odrzuć{" "}
                    </button>
                  </div>
                )}
                <Image
                  src={image_url}
                  alt={image_name}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                  width={1200}
                  height={1200}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
              </div>
              {status === "disabled" && (
                <button
                  onClick={() => changeStatus(id, "selected")}
                  className="px-3 py-2 bg-indigo-600 text-white rounded cursor-pointer"
                >
                  Wybierz
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBackgroundTab;
