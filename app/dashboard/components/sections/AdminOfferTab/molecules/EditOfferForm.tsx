import { OfferItem, OfferItemForm, PendingImage } from "@/app/dashboard/types";
import Editor from "./Editor";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/app/dashboard/helpers/supabase-browser";
import { replaceBlobImages, uploadImages, uploadMainImage } from "../utils";
import { updateOfferAction } from "@/app/dashboard/actions";

const EditOfferForm = ({ offer }: { offer: OfferItem }) => {
  const { register, handleSubmit } = useForm<OfferItemForm>({
    defaultValues: {
      title: offer.title,
      subtitle: offer.subtitle,
      main_image: offer.main_image,
    },
  });
  const [mainImagePreview, setMainImagePreview] = useState<string>(
    offer.main_image,
  );
  const [_, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  async function onUpdateOffer(form: OfferItemForm) {
    setLoading(true);
    try {
      const uploads = await uploadImages(pendingImages, supabase);
      const newUrls = uploads.map((u) => u.url);

      let finalMainImage = offer.main_image;

      if (
        mainImagePreview &&
        mainImagePreview !== offer.main_image &&
        form.file[0]
      ) {
        const uploadedMainImage = await uploadMainImage(
          { id: "main_image", file: form.file[0] },
          supabase,
        );

        finalMainImage = uploadedMainImage.url;
        setMainImagePreview(uploadedMainImage.url);
      }

      const finalDescription = replaceBlobImages(description, newUrls);

      const existingImages = Array.isArray(offer.images) ? offer.images : [];
      const allImages = [...existingImages, ...newUrls];

      startTransition(() =>
        updateOfferAction({
          ...offer,
          title: form.title,
          subtitle: form.subtitle,
          description: finalDescription,
          images: allImages,
          main_image: finalMainImage,
        }),
      );

      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.message);
    }
    setLoading(false);
  }

  const [description, setDescription] = useState(offer.description || "");
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);

  const router = useRouter();
  return (
    <>
      <h2 className="font-semibold mb-3">Edytuj post.</h2>
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
