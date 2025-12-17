"use client";
import "leaflet/dist/leaflet.css";
// components/LocationSection.tsx


import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, House } from "lucide-react";


const Map = dynamic(() => import("./MapComponent"), { ssr: false });

export default function LocationSection() {

  return (
    <section className="py-20 bg-gray-50" id="lokalizacja">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* === Map === */}
        <div className="h-[400px] rounded-2xl overflow-hidden shadow-md ">
          <Map />
        </div>

        {/* === Address info === */}
        <div className="flex flex-col justify-center text-gray-800">
          <h2 className="text-3xl mb-6">Lokalizacja</h2>

          <div className="space-y-4 text-base">
            <p className="flex items-start gap-3">
              <House className="w-5 h-5 text-primary-green shrink-0 mt-1" />
              <span>
                <strong>Pieśń Poranka - <br /> Odpoczywam w górach</strong> 
               
              </span>
            </p>

            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-green  shrink-0 mt-1" />
              <span>
                <strong>Lokalizacja</strong> <br />
               Szczytowa 30 <br /> 34-321 Łysina, Poland
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-green  shrink-0" />
              <a href="tel:+48123456789" className="hover:underline">
                +48 720 501 171
              </a>
            </p>

            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-green  shrink-0" />
              <a href="mailto:kontakt@sailormerry.pl" className="hover:underline">
                piesnporanka@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
