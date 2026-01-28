import { OfferItem, OfferItemForm, PendingImage } from "@/app/dashboard/types";
import Editor from "./Editor";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/app/dashboard/helpers/supabase-browser";
import { replaceBlobImages, uploadImages, uploadMainImage } from "../utils";


const EditOfferForm = ({ offer }: { offer: OfferItem }) => {
  const { register, handleSubmit } = useForm<OfferItemForm>({
    defaultValues: {
      title: offer.title,
      subtitle: offer.subtitle,
      main_image: offer.main_image,
    },
  });
   const [mainImagePreview, setMainImagePreview] = useState<string | null>( offer.main_image);
  async function onUpdateOffer(form: OfferItemForm) {
    setLoading(true);
    try {
      const uploads = await uploadImages(pendingImages, supabase);
        const main_image = await uploadMainImage(
          form.file[0]
            ? { id: "main_image", file: form.file[0] }
            : { id: "", file: new File([], "") },
          supabase,
        );
      const newUrls = uploads.map((u) => u.url);

      const finalDescription = replaceBlobImages(description, newUrls);

      const allImages = [...(offer.images || []), ...newUrls];

      await updateOffer(offer.id, form, finalDescription, allImages, mainImagePreview || offer.main_image);

      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  const [description, setDescription] = useState(offer.description || "");
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const updateOffer = async (
    id: number,
    form: OfferItemForm,
    description: string,
    imageUrls: string[] | null,
    main_image: string,
  ) => {
    const { error } = await supabase
      .from("offers")
      .update({
        title: form.title,
        subtitle: form.subtitle,
        description,
        images: imageUrls,
        main_image,
      })
      .eq("id", id);

    if (error) throw error;
  };
  return (
    <>
      <h2 className="font-semibold mb-3">
        Utwórz nowy post, który będzie się wyświetlał na stronie.
      </h2>
      {loading ? (
        <p>Zapisywanie zmian...</p>
      ) : (
        <form
          onSubmit={handleSubmit(onUpdateOffer)}
          className="flex flex-col gap-2"
        >
          <input {...register("title")} className="border p-2 rounded" />

          <input {...register("subtitle")} className="border p-2 rounded" />
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

          <button className="bg-green-600 text-white rounded px-3 py-2">
            Zapisz zmiany
          </button>
        </form>
      )}
    </>
  );
};

export default EditOfferForm;
