"use server";

// import { createClientServ } from "./supabase-server";
// import { revalidatePath } from "next/cache";

export async function uploadHeroImage(formData: FormData) {
  // const supabase = await createClientServ();

  // const file = formData.get("file") as File;
  // const image_name = formData.get("image_name") as string;

  // if (!file || !image_name) return;

  // const filePath = `${Date.now()}-${file.name}`;

  // const { error: uploadError } = await supabase.storage
  //   .from("hero-images")
  //   .upload(filePath, file);

  // if (uploadError) throw uploadError;

  // const { data: url } = await supabase.storage
  //   .from("hero-images")
  //   .createSignedUrl(filePath, 360000);

  // await supabase.from("hero_background").insert({
  //   image_name,
  //   image_url: url?.signedUrl,
  //   status: "disabled",
  // });

//   revalidatePath("/admin");
}
