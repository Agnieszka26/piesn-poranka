import { supabase } from "@/app/dashboard/helpers/supabase-browser";
import { OfferItemForm, PendingImage } from "@/app/dashboard/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Editor from "./Editor";
import { replaceBlobImages, uploadImages, uploadMainImage } from "../utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const uploadOffer = async (
  form: OfferItemForm,
  description: string,
  imageUrls: string[] | null,
  main_image: string,
) => {
  const { error } = await supabase.from("offers").insert({
    title: form.title,
    subtitle: form.subtitle,
    main_image,
    description,
    images: imageUrls,
  });

  if (error) throw error;
};

const NewOfferForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { register, handleSubmit, reset} = useForm<OfferItemForm>();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const router = useRouter();



  async function onUploadOffer(form: OfferItemForm) {
  const toastId = toast.loading("Dodawanie posta...");

  setLoading(true);
  try {
    const uploads = await uploadImages(pendingImages, supabase);

    const main_image = await uploadMainImage(
      form.file[0]
        ? { id: "main_image", file: form.file[0] }
        : { id: "", file: new File([], "") },
      supabase,
    );

    const imagesUrls = uploads.map((u) => u.url);
    const finalDescription = replaceBlobImages(description, imagesUrls);

    await uploadOffer(form, finalDescription, imagesUrls, main_image.url);

    reset();
    setMainImagePreview(null);
    setDescription("");
    setPendingImages([]);

    toast.success("Post został dodany ✅", { id: toastId });

    router.refresh();
    onSuccess();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    toast.error(err.message ?? "Nie udało się dodać posta", {
      id: toastId,
    });
  } finally {
    setLoading(false);
  }
}


  return (
    <div>
      <h2 className="font-semibold mb-3">
        Utwórz nowy post, który będzie się wyświetlał na stronie.
      </h2>

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
          <label htmlFor="image">Obrazek główny</label>
          <input
            id="file"
            type="file"
            accept="image/*"
            className={"border p-2 rounded"}
            {...register("file")}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setMainImagePreview(URL.createObjectURL(file));
              }
            }}
          />
          {mainImagePreview && (
            <div className="w-full flex items-center justify-center rounded-lg">
              <img
                src={mainImagePreview}
                alt="preview"
                className="max-h-full
     rounded-lg object-contain"
              />
            </div>
          )}

          <Editor
            value={description}
            onChange={setDescription}
            setPendingImages={setPendingImages}
          />

          <button className="px-3 py-2 bg-blue-600 text-white rounded">
            Zapisz
          </button>
        </form>
    </div>
  );
};

export default NewOfferForm;
