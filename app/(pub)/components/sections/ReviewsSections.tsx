
"use client";

import { Star, } from "lucide-react";
import Carousel from "../molecules/Carousel/Carousel";
import { ReviewItem } from "@/app/dashboard/types";
import { FcGoogle } from "react-icons/fc";

export default function ReviewsSection({ reviews }: { reviews: ReviewItem[] }) {
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
              Na podstawie: 
              <span className="font-bold text-gray-800"> {reviews.length} opinii</span>
            </p>
            <div className="mt-4">
              <FcGoogle size={44} />
            </div>
          </div>

          <Carousel reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
