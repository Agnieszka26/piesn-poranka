"use client";

import Image, { StaticImageData } from "next/image";
import gallery_img_1 from "../../assets/images/gallery_1.png";
import gallery_img_2 from "../../assets/images/gallery_2.png";
import gallery_img_3 from "../../assets/images/gallery_3.png";
import gallery_img_4 from "../../assets/images/gallery_4.png";
import gallery_img_5 from "../../assets/images/gallery_5.png";

interface GalleryImage {
  id: number;
  src: StaticImageData;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: gallery_img_1, alt: "Widok na góry o zachodzie słońca" },
  { id: 2, src: gallery_img_2, alt: "jacuzzi" },
  { id: 3, src: gallery_img_3, alt: "Domki nad w górach" },
  { id: 4, src: gallery_img_4, alt: "Komfort w zimie" },
  { id: 5, src: gallery_img_5, alt: "Całoroczny domek" },
];

export default function GalleryPreview() {
  const visibleImages = galleryImages.slice(0, 5); // pokaż 3–5 zdjęć

  return (
    <section className="py-20 bg-gray-200 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-10">Galeria</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-800 hover:bg-gray-100">
            <a href="/gallery">ZOBACZ WSZYSTKIE ZDJĘCIA</a>
          </button>
        </div>
      </div>
    </section>
  );
}
