"use client";

import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery1.jpg", alt: "Widok jeziora o zachodzie słońca" },
  { id: 2, src: "/images/gallery2.jpg", alt: "Sauna i strefa wellness" },
  { id: 3, src: "/images/gallery3.jpg", alt: "Domki nad jeziorem" },
  { id: 4, src: "/images/gallery4.jpg", alt: "Restauracja z widokiem na las" },
  { id: 5, src: "/images/gallery5.jpg", alt: "Pomost nad jeziorem" },
];

export default function GalleryPreview() {
  const visibleImages = galleryImages.slice(0, 5); // pokaż 3–5 zdjęć

  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif mb-10">Galeria</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
          >
            <a href="/galeria">ZOBACZ WSZYSTKIE ZDJĘCIA</a>
          </button>
        </div>
      </div>
    </section>
  );
}