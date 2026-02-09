'use client';
import { OfferItem } from "@/app/dashboard/types";
import NewsSections from "../components/sections/NewsSections";
import { useEffect, useState } from "react";
import { supabase } from "@/app/dashboard/helpers/supabase-browser";

export default function MainNewsPage() {
const [offers, setOffers] = useState<OfferItem[]>([]);
  async function getAllNews() {
    const data = await supabase.from("offers").select("*");
    if (data.error) return alert(data.error.message);
    setOffers(data.data);
  }
  useEffect(() => {
    const fetchData = async () => {
      await getAllNews();
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white text-center py-6">
         <NewsSections offers={offers} />
      </main>
    </>
  );
}
