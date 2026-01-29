import { PendingImage } from "@/app/dashboard/types";
import { SupabaseClient } from "@supabase/supabase-js";

export function replaceBlobImages(html: string, images: string[]): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imgTags = doc.querySelectorAll("img");
  let i = 0;

  imgTags.forEach((img) => {
    if (img.src.startsWith("blob:") && i < images.length) {
      img.src = images[i]; 
      i++;
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

export const imageStylesDescription = `className="prose prose-neutral max-w-none
             prose-img:rounded-xl
             prose-img:mx-auto
             prose-img:my-8
             prose-img:shadow-lg`