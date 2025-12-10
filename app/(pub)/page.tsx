import GalleryPreview from "./components/sections/GalleryPreview";
import Hero from "./components/sections/HeroArea";
import LocationSection from "./components/sections/LocationSection/LocationSection";
import OffersSection from "./components/sections/OffersSections";
import ReviewsSection from "./components/sections/ReviewsSections";

export default function Home() {
  return (
    <main>
      <Hero />
      <OffersSection />
      <GalleryPreview />
      <ReviewsSection />
      <LocationSection />
    </main>
  );
}
