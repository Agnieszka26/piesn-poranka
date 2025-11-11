import GalleryPreview from "./components/sections/GalleryPreview";
import Hero from "./components/sections/HeroArea";
import LocationSection from "./components/sections/LocationSection/LocationSection";
import OffersSection from "./components/sections/OffersSections";

export default function Home() {
  return (
    <main>
      <Hero />
      <OffersSection />
      <GalleryPreview />
      <LocationSection />
    </main>
  );
}
