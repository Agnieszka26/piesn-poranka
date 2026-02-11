"use server";

import { createSupabaseServerClient } from "./helpers/supabase-server";
import { NewsItem } from "./types";

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    throw new Error("Email jest wymagany");
  }

  const supabase = createSupabaseServerClient();

  const { error } = await (
    await supabase
  ).auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_HOME_URL}/dashboard`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateOfferAction(input: NewsItem) {
  const supabase = createSupabaseServerClient();

  const { id, ...data } = input;

  const { error } = await supabase.from("offers").update(data).eq("id", id);

  if (error) {
    console.error("updateOfferAction error:", error);
    throw new Error("Nie udało się zapisać zmian");
  }
}

export const changeStatusAction = async (
  id: number,
  status: "disabled" | "selected",
) => {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("hero_background")
    .update({ status: status })
    .eq("id", id)
    .select();
  if (error) {
    console.error("updateOfferAction error:", error);
    throw new Error("Nie udało się zapisać zmian");
  }
};

export async function updateGalleryPositions(
  items: { id: number; position: number }[],
) {
  const supabase = createSupabaseServerClient();
  for (const item of items) {
    const { error } = await supabase
      .from("gallery")
      .update({ position: item.position })
      .eq("id", item.id);

    if (error) {
      console.error("Błąd aktualizacji pozycji:", error.message);
      throw new Error(error.message);
    }
  }
  return true;
}

export async function updatePriceAction(
  key: string,
  date?: string,
  price?: number,
  oldPrice?: number | null,
) {
  const supabase = createSupabaseServerClient();
 const updates: Record<string, unknown> = {};
  if (date !== undefined) updates.date = date;
  if (price !== undefined) updates.price = price;
  if (oldPrice !== undefined) updates.oldPrice = oldPrice;

  // Jeśli nie ma żadnych zmian, nie robimy update
  if (Object.keys(updates).length === 0) return false;

  const { data, error } = await supabase
    .from("prices")
    .update(updates)
    .eq("key", key);
     if (error) {
        console.error("Błąd aktualizacji pozycji:", error.message);
      throw new Error(error.message);
     }
     return true;
}
