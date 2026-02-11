'use client';
import { useEffect, useState } from "react";
import PriceCard from "../components/molecules/PriceCard";
import { fetchPrices } from "@/app/dashboard/helpers/fetchPrices";
import { PriceCardProps } from "../typesProps";

export default function OfertyPage() {
  const [prices, setPrices] = useState<PriceCardProps[]>([]);
    useEffect(() => {
    const fd = async () => await fetchPrices();
    fd().then((data) => {
      setPrices(data as unknown as PriceCardProps[])});
  }, []);

  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white text-center py-6">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl mb-10">CENNIK {new Date().getFullYear()}</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((price) => (
              <PriceCard  {...price} key={price.key}/>
            ))}
          </div>
          <div className="text-center p-6 mt-10">

          <p className="text-xl">ZALICZKA </p> 
          <p className="mb-2">płatna na poniższe dane:</p>
          <p>Adresat: Aleksandra Grzywak-Gawryś</p>
          <p>Numer konta: 03 1050 1214 1000 0098 0067 6257</p>
          </div>
         
        </section>
      </main>
    </>
  );
}
