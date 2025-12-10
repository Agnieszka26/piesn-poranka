"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MountainSnow,
  Flower2,
  CalendarSync,
  Sun,
  Bed,
  Footprints,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import img1 from "../../assets//images/oferta_1.jpg";
import img2 from "../../assets/images/oferta_2.jpg";
import img3 from "../../assets/images/oferta_3.jpg";
import Link from "next/link";

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
}

// interface Offer {
//   id: number;
//   title: string;
//   price: string;
//   unit: string;
//   img: string;
//   tag?: string;
// }

const features: Feature[] = [
  { id: 1, icon: MountainSnow, title: "Cicha i spokojna okolica" },
  { id: 3, icon: Sun, title: "Piękne widoki z okna na góry" },
  { id: 2, icon: CalendarSync, title: "Całoroczny - kominek i klimatyzacja" },
  { id: 4, icon: Flower2, title: "Specjalna strefa relaksu: Jacuzzi, taras, hamak, plac zabaw" },
  { id: 5, icon: Bed, title: "Wysoki standard" },
  { id: 6, icon: Footprints, title: "Bliskość szlaków turystycznych" },
];

const offers = [
  {
    id: 1,
    title:
      "Wycieczka do groty Komonieckiego i wodospadu Dusica Czas przejścia: 2h Dystans: 6,3km Suma podejść...",
    img: img1,
  },
  {
    id: 2,
    title:
      "Dzisiaj pokażemy wam jedną z naszych ulubionych wycieczek – trasę do domków pasterskich...",
    img: img2,
  },
  {
    id: 3,
    title:
      "Dzisiaj zabierzemy cię na jedną z naszych ulubionych wycieczek po okolicy! Pokażemy...",
    img: img3,
  },
];

export default function OffersSection() {



  return (
    <section className="w-full bg-white text-center" id="offers">
      {/* ===== FEATURES BAR ===== */}
      <div className="  border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map(({ id, icon: Icon, title }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center text-gray-700"
            >
              <Icon className="w-8 h-8 mb-3 text-primary-green" />
              <p className="text-sm font-medium leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SPECIAL OFFERS ===== */}
      <div className="py-20">
        <h2 className="text-3xl mb-10">Wieści z &quot;Pieśni Poranka&quot;</h2>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto">


          {/* Karty ofert */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            {offers.map((offer) => (
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
                    className="object- w-full h-56"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-gray-800">{offer.title}</p>
                  <Link href="/offers" className="text-sm text-primary-green">
                    czytaj więcej
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Prawy przycisk */}

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
