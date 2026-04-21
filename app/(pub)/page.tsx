"use client";

import GalleryPreview from "./components/sections/GalleryPreview";
import Hero from "./components/sections/HeroArea";
import LocationSection from "./components/sections/LocationSection/LocationSection";
import NewsSections from "./components/sections/NewsSections";
import ReviewsSection from "./components/sections/ReviewsSections";
import { useEffect, useState } from "react";
import { GalleryItem, NewsItem, ReviewItem } from "../dashboard/types";
import Features from "./components/sections/Features";
import InfoSection from "./components/sections/InfoSection";
import { supabase } from "../dashboard/helpers/supabase-browser";

export default function Home() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);

  async function getAllNews() {
    const data = await supabase.from("offers").select("*");
    if (data.error) return alert(data.error.message);
    setNews(data.data);
  }
  async function getAllGallery() {
    const data = await supabase.from("gallery").select("*").order("position", { ascending: true });;
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
      await Promise.all([
        getAllGallery(),
        getAllReviews(),
        getAllNews(),
        getAllHeroImages(),
      ]);
    }
   
    fetchData();
  }, []);

  return (
    <main>
      <Hero imgs={images} />
      <section className="w-full bg-white text-center" id="offers">
        <Features />
        <InfoSection />
        <NewsSections news={news} />
      </section>
      <GalleryPreview galleryImages={gallery} />
      <ReviewsSection reviews={reviews} />
      <LocationSection />
    </main>
  );
}
