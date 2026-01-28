"use client";
import { createClient } from "@supabase/supabase-js";
import GalleryPreview from "./components/sections/GalleryPreview";
import Hero from "./components/sections/HeroArea";
import LocationSection from "./components/sections/LocationSection/LocationSection";
import NewsSections from "./components/sections/NewsSections";
import ReviewsSection from "./components/sections/ReviewsSections";
import { useEffect, useState } from "react";
import { GalleryItem, OfferItem, ReviewItem } from "../dashboard/types";
import Features from "./components/sections/Features";
import InfoSection from "./components/sections/InfoSection";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const preloadImages = (urls: string[]) => {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = reject;
        })
    )
  );
};
export default function Home() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [offers, setOffers] = useState<OfferItem[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  async function getAllNews() {
    const data = await supabase.from("offers").select("*");
    if (data.error) return alert(data.error.message);
    setOffers(data.data);
  }
  async function getAllGallery() {
    const data = await supabase.from("gallery").select("*");
    if (data.error){
      
      console.log("error", data.error)
       return alert(data.error.message)};
    setGallery(data.data);
  }
  async function getAllHeroImages() {
    const data = await supabase
      .from("hero_background")
      .select("*")
      .eq("status", "selected");

    if (data.error) return alert(data.error.message);
    const imageUrls = data.data.map((img) => img.image_url);
    setImages(imageUrls);
  }
  async function getAllReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("id", { ascending: false });
    if (error) return alert(error.message);
    setReviews(data);
  }
  useEffect(() => {
    async function fetchData() {
      await getAllGallery();
      await getAllReviews();
      await getAllNews();
      await getAllHeroImages();
    }
   
    fetchData();
  }, []);
  useEffect(() => {
    if (!images.length) return;

    preloadImages(images)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, [images]);

  return (
    <main>
      {!imagesLoaded ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          Ładowanie...
        </div>
      ) : (
        <>
          <Hero imgs={images} />
          <section className="w-full bg-white text-center" id="offers">
            <Features />
            <InfoSection />
            <NewsSections offers={offers} />
          </section>
          <GalleryPreview galleryImages={gallery} />
          <ReviewsSection reviews={reviews} />
        </>
      )}
      <LocationSection />
    </main>
  );
}
