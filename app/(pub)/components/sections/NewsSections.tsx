"use client";
import Image from "next/image";
import Link from "next/link";
import { OfferItem } from "@/app/dashboard/types";


export default function NewsSections({ offers }: { offers: OfferItem[] }) {


  return (
    <div className="py-20">
      <h2 className="text-3xl mb-10 text-center">
        Wycieczki z &quot;Pieśni Poranka&quot;
      </h2>

      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        {/* Karty ofert */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {offers.map(({ id, title, main_image }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative">
                <Image
                  src={main_image}
                  alt={title}
                  width={400}
                  height={250}
                  className="object- w-full h-56"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-800">{title}</p>
                <Link
                  href={`/news/${id}`}
                  className="text-sm text-primary-green"
                >
                  czytaj więcej
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
