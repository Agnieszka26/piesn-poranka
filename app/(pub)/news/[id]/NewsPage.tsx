"use client";

import { OfferItem } from "@/app/dashboard/types";
import { createClient } from "@supabase/supabase-js";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "dayjs/locale/pl";
import { imageStylesDescription } from "@/app/dashboard/components/sections/AdminOfferTab/utils";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

dayjs.locale("pl");

function timeAgo(dateString: string) {
  return "Dodano: " + dayjs(dateString).format("DD MMMM YYYY");
}

const NewsPage = ({ id }: { id: string }) => {
  const [offer, setOffer] = useState<OfferItem | null>(null);

  async function getOffer() {
    const { data, error } = await supabase
      .from("offers")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setOffer(data);
  }

  useEffect(() => {
  const fetchData = async () => { await getOffer(); }; fetchData();
  }, []);

  if (!offer) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Ładowanie artykułu...
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white text-center py-6">
        <section className="container mx-auto px-4">


        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* IMAGE */}
          <div className="relative w-full h-[220px] md:h-[420px]">
            <Image
              src={offer.main_image}
              alt={offer.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10 text-left">
            <p className="text-sm text-gray-500 mb-2">
              {timeAgo(offer.created_at)}
            </p>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              {offer.title}
            </h1>

            {offer.subtitle && (
              <h2 className="text-lg md:text-xl text-gray-600 mb-6">
                {offer.subtitle}
              </h2>
            )}

            <div className="prose prose-lg max-w-none text-gray-800">
              {
                   <div dangerouslySetInnerHTML={{ __html: offer.description }} 
                    className={imageStylesDescription}/>

                }
            </div>
          </div>
        </article>
        </section>
      </main>
    </>
  );
};

export default NewsPage;
