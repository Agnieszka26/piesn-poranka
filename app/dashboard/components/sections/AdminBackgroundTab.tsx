"use client";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HeroImageItem } from "../../types";
import { supabase } from "../../helpers/supabase-browser";
import { changeStatusAction } from "../../actions";
import toast from "react-hot-toast";

type HeroImageItemForm = HeroImageItem & {
  file: FileList;
};
const AdminBackgroundTab = () => {
  const { register, handleSubmit, reset } = useForm<HeroImageItemForm>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [gallery, setGallery] = useState<HeroImageItem[]>([]);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
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
      .from("hero-images").getPublicUrl(path)
    const publicPhotoUrl = url?.publicUrl;
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
      toast.success("Dodano zdjęcie 📸");
      setGallery([]);
      await getAllGallery();
      setLoading(false);
      reset();
      router.refresh();
    }
  }

  const changeStatus = async (id: number, status: "disabled" | "selected") => {
    const toastId = toast.loading("Zapisywanie...");
    startTransition(async () => {
      try {
        await changeStatusAction(id, status);
        toast.success(
          status === "selected"
            ? "Zdjęcie ustawione jako główne ⭐"
            : "Zdjęcie odrzucone 🗑️"
            , { id: toastId }
        );
        await getAllGallery();
        router.refresh();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError(e.message);
        toast.error(e.message ?? "Coś poszło nie tak", { id: toastId });
      }
    });
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
        </form>
        <p className="mx-auto text-2xl text-center p-4">Dostępne zdjęcia: </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isPending ? (
            <p>Aktualizowanie...</p>
          ) : (
            gallery.map(({ image_name, image_url, id, status }) => (
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
                        Odrzuć
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBackgroundTab;
