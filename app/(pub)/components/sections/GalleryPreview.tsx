"use client";
import Image from "next/image";
import { GalleryItem } from "@/app/dashboard/types";

export default function GalleryPreview({galleryImages}: {galleryImages: GalleryItem[]}) {
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
                src={img.image_url}
                alt={img.description}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                width={1200}
                height={1200}
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
