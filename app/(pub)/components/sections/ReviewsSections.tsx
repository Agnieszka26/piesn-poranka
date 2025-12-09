// components/ReviewsSection.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import Image from "next/image";
import ReviewCard from "../molecules/ReviewCard";
import Carousel from "../molecules/Carousel/Carousel";
import { ReviewItem } from "@/app/dashboard/types";
import { FcGoogle } from "react-icons/fc";
const reviews: ReviewItem[] = [
  {
    id: 1,
    author: "Michał Sapieha",
    inserted_at: "2 lata temu",
    text: "Solidna firma, porządne łódki, sprawdzona kadra. Polecam mazurską przygodę!",
    rating: 5,
  },
  {
    id: 2,
    author: "Adam Abramczuk",
    inserted_at: "2 lata temu",
    text: "Przygodę z Sailor Merry zacząłem od kursu na patent żeglarski, następnie brałem udział w kursie doszkalającym umiejętności.",
    rating: 5,
  },
  {
    id: 3,
    author: "Aleksandra O.",
    inserted_at: "2 lata temu",
    text: "Niesamowita przygoda, cudowni ludzie. Polecam wszystkim szukającym przygody. Byliśmy na rejsie po Mazurach!",
    rating: 5,
  },
  {
    id: 4,
    author: "Karol P.",
    inserted_at: "1 rok temu",
    text: "Świetna obsługa, piękne widoki i doskonała organizacja. Polecam każdemu kto chce spróbować żeglarstwa!",
    rating: 5,
  },
  {
    id: 5,
    author: "Julia W.",
    inserted_at: "1 rok temu",
    text: "Rewelacyjny kurs i wspaniała atmosfera. Zdecydowanie warto!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
     <section className="w-full bg-white text-center">
    <div className="container px-5 py-20 bg-white mx-auto overflow-hidden">
      <div className=" grid grid-cols-1 lg:grid-cols-[20%_80%] gap-16">
        <div className="w-18  flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            DOSKONAŁA
          </h3>
          <div className="flex text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500" />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Na podstawie{" "}
            <span className="font-bold text-gray-800">13 opinii</span>
          </p>
          <div className="mt-4">
            <FcGoogle size={44}/>
          </div>
        </div>

        <Carousel reviews={reviews} />
      </div>
    </div>
    </section>
  );
}
