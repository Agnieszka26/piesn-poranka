"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import image1 from "../assets/images/gallery_1.png";
import image2 from "../assets/images/gallery_2.png";
import image3 from "../assets/images/gallery_3.png";
import image4 from "../assets/images/gallery_4.png";
import image5 from "../assets/images/gallery_5.png";
import image6 from "../assets/images/gallery_5.png";
import { GalleryItem } from "@/app/dashboard/types";
import { createClient } from "@supabase/supabase-js";

const items = [
  { title: "Tea tasting", img: image1 },
  { title: "Plethora of books", img: image2 },
  { title: "Chrysanthemum farm", img: image3 },
  { title: "Agricultural workshops", img: image4 },
  { title: "Performances", img: image5 },
  { title: "A miniature village", img: image6 },
];
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
//{galleryImages}: {galleryImages: GalleryItem[]}
export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  // Przesunięcie karuzeli na wybrane zdjęcie po otwarciu
  useEffect(() => {
    if (emblaApi && selectedIndex !== null) {
      emblaApi.scrollTo(selectedIndex);
    }
  }, [selectedIndex, emblaApi]);

  // Aktualizacja aktualnego slajdu
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
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
  useEffect(() => {
    const select = () => {
      if (emblaApi) {
        emblaApi.on("select", onSelect);
        onSelect();
      }
    };
    select();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white text-center py-6">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl mb-10">Galeria</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <div
                key={i}
                className="relative h-64 rounded-lg overflow-hidden shadow-md group cursor-pointer"
                onClick={() => setSelectedIndex(i)}
              >
                <Image
                  src={item.image_url}
                  alt={item.description}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
            ))}
          </div>
        </section>

        {/* Modal z karuzelą */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full p-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zamknij */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                onClick={() => setSelectedIndex(null)}
              >
                ×
              </button>

              {/* Karuzela */}
              <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {gallery.map((item, i) => (
                      <div key={i} className="flex-shrink-0 w-full px-2">
                        <Image
                          src={item.image_url}
                          alt={item.description}
                          width={1200}
                          height={1200}
                          className="rounded-lg object-contain"
                        />
                        <h2 className="mt-2 text-center">{item.description}</h2>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strzałki */}
                <button
                  className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                  onClick={scrollPrev}
                >
                  ←
                </button>
                <button
                  className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                  onClick={scrollNext}
                >
                  →
                </button>

                {/* Paginacja */}
                <div className="flex justify-center mt-4 space-x-2">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i === selectedSlide ? "bg-primary-green" : "bg-gray-300"
                      }`}
                      onClick={() => emblaApi?.scrollTo(i)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
