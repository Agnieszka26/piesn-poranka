// components/ReviewsSection.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  initial: string;
  time: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Michał Sapieha",
    initial: "M",
    time: "2 lata temu",
    text: "Solidna firma, porządne łódki, sprawdzona kadra. Polecam mazurską przygodę!",
    rating: 5,
  },
  {
    id: 2,
    name: "Adam Abramczuk",
    initial: "A",
    time: "2 lata temu",
    text: "Przygodę z Sailor Merry zacząłem od kursu na patent żeglarski, następnie brałem udział w kursie doszkalającym umiejętności.",
    rating: 5,
  },
  {
    id: 3,
    name: "Aleksandra O.",
    initial: "A",
    time: "2 lata temu",
    text: "Niesamowita przygoda, cudowni ludzie. Polecam wszystkim szukającym przygody. Byliśmy na rejsie po Mazurach!",
    rating: 5,
  },
  {
    id: 4,
    name: "Karol P.",
    initial: "K",
    time: "1 rok temu",
    text: "Świetna obsługa, piękne widoki i doskonała organizacja. Polecam każdemu kto chce spróbować żeglarstwa!",
    rating: 5,
  },
  {
    id: 5,
    name: "Julia W.",
    initial: "J",
    time: "1 rok temu",
    text: "Rewelacyjny kurs i wspaniała atmosfera. Zdecydowanie warto!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const prev = () =>
    setIndex((prev) => (prev === 0 ? reviews.length - visibleCount : prev - 1));
  const next = () =>
    setIndex((prev) =>
      prev + visibleCount >= reviews.length ? 0 : prev + 1
    );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 items-center">
        {/* === Left column === */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">DOSKONAŁA</h3>
          <div className="flex text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500" />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Na podstawie <span className="font-bold text-gray-800">13 opinii</span>
          </p>
          <div className="mt-4">
            <Image
              src="/google-logo.png"
              alt="Google logo"
              width={90}
              height={30}
              className="mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* === Reviews slider === */}
        <div className="col-span-3 relative">
          {/* Strzałki */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Karty opinii */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="min-w-[calc(100%/3)] px-3"
                >
                  <div className="bg-gray-50 rounded-2xl shadow-sm p-5 h-full flex flex-col text-left">
                    {/* Header */}
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold mr-3">
                        {r.initial}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm">
                          {r.name}
                        </p>
                        <p className="text-xs text-gray-500">{r.time}</p>
                      </div>
                      <Image
                        src="/google-g-icon.png"
                        alt="Google icon"
                        width={18}
                        height={18}
                      />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                      <CheckCircle className="w-4 h-4 text-blue-500 ml-1" />
                    </div>

                    {/* Text */}
                    <p className="text-sm text-gray-700 flex-1">
                      {r.text.length > 120 ? `${r.text.slice(0, 120)}...` : r.text}
                    </p>

                    <button className="text-xs mt-2 text-gray-500 hover:underline">
                      Czytaj więcej
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
