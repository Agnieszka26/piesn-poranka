import { PendingImage } from "@/app/dashboard/types";
import { SupabaseClient } from "@supabase/supabase-js";

export function replaceBlobImages(html: string, images: string[]) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imgTags = doc.querySelectorAll("img");

  imgTags.forEach((img, index) => {
    if (img.src.startsWith("blob:")) {
      img.src = images[index]; // URL z Supabase
    }
  });

  return doc.body.innerHTML;
}
export const uploadImages = async (
  pendingImages: PendingImage[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>,
) => {
  const uploaded: { id: string; url: string }[] = [];

  for (const { id, file } of pendingImages) {
    const { data, error } = await supabase.storage
      .from("offers-images")
      .upload(`${file.name}-${crypto.randomUUID()}`, file);

    if (error) throw error;

    const { data: signed } = await supabase.storage
      .from("offers-images")
      .createSignedUrl(data.path, 360000);

    if (signed?.signedUrl) {
      uploaded.push({ id, url: signed.signedUrl });
    }
  }

  return uploaded;
};

export const uploadMainImage = async (
  pendingImage: PendingImage,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>,
) => {
  const { id, file } = pendingImage;
  const { data, error } = await supabase.storage
    .from("offers-images")
    .upload(`${file.name}-${crypto.randomUUID()}`, file);

  if (error) throw error;

  const { data: signed } = await supabase.storage
    .from("offers-images")
    .createSignedUrl(data.path, 360000);

  if (signed?.signedUrl) {
    return { id, url: signed.signedUrl };
  }
    return { id, url: "" };
};
