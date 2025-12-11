"use client"
import { createClient } from "@supabase/supabase-js";
import GalleryPreview from "./components/sections/GalleryPreview";
import Hero from "./components/sections/HeroArea";
import LocationSection from "./components/sections/LocationSection/LocationSection";
import OffersSection from "./components/sections/OffersSections";
import ReviewsSection from "./components/sections/ReviewsSections";
import { useEffect, useState } from "react";
import { GalleryItem } from "../dashboard/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?? ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
   const [gallery, setGallery] = useState<GalleryItem[]>([]);
     async function getAllGallery() {
       const data = await supabase.from("gallery").select("*");
       if (data.error) return alert(data.error.message);
       setGallery(data.data);
     }

     useEffect(() => {
       async function fetchData() {
         await getAllGallery();
       }
       fetchData();
     }, []);

  return (
    <main>
      <Hero />
      <OffersSection />
      <GalleryPreview galleryImages={gallery}  />
      <ReviewsSection />
      <LocationSection />
    </main>
  );
}
