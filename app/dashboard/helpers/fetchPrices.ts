import { pricesCONST } from "@/app/(pub)/prices/texts";
import { PriceItem } from "../types";
import { supabase } from "./supabase-browser";

export async function fetchPrices() {
  const { data, error } = await supabase.from("prices").select("*");

  if (error) {
    alert(error.message);
    return [];
  }

  const dbMap = new Map<string, PriceItem>(
    (data || []).map((item) => [String(item.key), item])
  );

  const merged = pricesCONST.map((constItem) => {
    const keyStr = String(constItem.key); 
    const db = dbMap.get(keyStr);

    if (!db) {
      console.warn(`Brak dopasowania w DB dla key: "${constItem.key}"`);
      return constItem; 
    }

    return {
     ...constItem,
      date: db.date ?? constItem.date,
      price: db.price ?? constItem.price,
      oldPrice: db.oldPrice ?? constItem.oldPrice,
    };
  });

  return merged;
}