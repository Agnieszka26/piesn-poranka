// components/OffersSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Waves,
  Flower2,
  Home,
  Hotel,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
}

interface Offer {
  id: number;
  title: string;
  price: string;
  unit: string;
  img: string;
  tag?: string;
}

const features: Feature[] = [
  { id: 1, icon: Waves, title: "W otoczeniu jezior i lasów" },
  { id: 2, icon: Flower2, title: "Wellness & Spa z kompleksem saun" },
  { id: 3, icon: Home, title: "200 miejsc noclegowych" },
  { id: 4, icon: Hotel, title: "Mazurski hotel przyjazny rodzinie" },
  { id: 5, icon: Utensils, title: "Wyśmienite menu" },
];

const offers: Offer[] = [
  {
    id: 1,
    title: "Wakacje – Pełne wyżywienie – 2 dzieci bezpłatnie",
    price: "od 500 zł",
    unit: "/noc",
    img: "/images/offer1.jpg",
    tag: "LATO 2026",
  },
  {
    id: 2,
    title: "Wakacje 2026 w domkach na Mazurach – bez wyżywienia",
    price: "od 539 zł",
    unit: "/noc",
    img: "/images/offer2.jpg",
    tag: "LATO 2026",
  },
  {
    id: 3,
    title: "Balia i Sauna Rosyjska (3 godziny)",
    price: "od 500 zł",
    unit: "/os.",
    img: "/images/offer3.jpg",
  },
];

export default function OffersSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full bg-white text-center">
      {/* ===== FEATURES BAR ===== */}
      <div className="border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map(({ id, icon: Icon, title }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center text-gray-700"
            >
              <Icon className="w-8 h-8 mb-3 text-yellow-600" />
              <p className="text-sm font-medium leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SPECIAL OFFERS ===== */}
      <div className="py-20">
        <h2 className="text-3xl font-serif mb-10">Oferty specjalne</h2>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          {/* Lewy przycisk */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 text-gray-500 hover:text-black"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Poprzednie</span>
          </button>

          {/* Karty ofert */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            {offers.slice(index, index + 3).map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative">
                  <Image
                    src={offer.img}
                    alt={offer.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-56"
                  />
                  {offer.tag && (
                    <span className="absolute top-4 left-4 bg-blue-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {offer.tag}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 bg-blue-900/80 text-white px-4 py-1 rounded">
                    {offer.price} <span className="text-sm">{offer.unit}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-gray-800">{offer.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prawy przycisk */}
          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 text-gray-500 hover:text-black"
          >
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Następne</span>
          </button>
        </div>

        <div className="mt-12">
          <button className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-800 hover:bg-gray-100">
            ZOBACZ WSZYSTKIE OFERTY
          </button>
        </div>
      </div>
    </section>
  );
}
