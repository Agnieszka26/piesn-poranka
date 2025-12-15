"use client"
import { createClient } from "@supabase/supabase-js";
import GalleryPreview from "./components/sections/GalleryPreview";
import Hero from "./components/sections/HeroArea";
import LocationSection from "./components/sections/LocationSection/LocationSection";
import NewsSections from "./components/sections/NewsSections";
import ReviewsSection from "./components/sections/ReviewsSections";
import { useEffect, useState } from "react";
import { GalleryItem, OfferItem, ReviewItem } from "../dashboard/types";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?? ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
   const [gallery, setGallery] = useState<GalleryItem[]>([]);
   const [reviews, setReviews] = useState<ReviewItem[]>([])
   const [offers, setOffers] = useState<OfferItem[]>([]);
   async function getAllNews() {
    const data = await supabase.from("offers").select("*");
    if(data.error)return alert(data.error.message);
    setOffers(data.data)
   }
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
     async function getAllReviews() {
         const { data, error } = await supabase
           .from("reviews")
           .select("*")
           .order("id", { ascending: false });
         if (error) return alert(error.message);
         setReviews(data);
         console.log("data", data);
       }
       useEffect(() => {
         async function fetchData() {
           await getAllReviews();
           await getAllNews()
         }
         fetchData();
       }, []);
     

  return (
    <main>
      <Hero />
      <NewsSections offers={offers}/>
      <GalleryPreview galleryImages={gallery}  />
      <ReviewsSection reviews={reviews}/>
      <LocationSection />
    </main>
  );
}
