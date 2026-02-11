'use client';
import LocationSection from "../components/sections/LocationSection/LocationSection";

export default function MainNewsPage() {

  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white  py-6">
        <LocationSection />
      </main>
    </>
  );
}
