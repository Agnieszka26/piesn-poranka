"use client";
import "leaflet/dist/leaflet.css";
// components/LocationSection.tsx


import dynamic from "next/dynamic";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Map = dynamic(() => import("./MapComponent"), { ssr: false });

export default function LocationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* === Map === */}
        <div className="h-[400px] rounded-2xl overflow-hidden shadow-md">
          <Map />
        </div>

        {/* === Address info === */}
        <div className="flex flex-col justify-center text-gray-800">
          <h2 className="text-3xl font-serif mb-6">Lokalizacja</h2>

          <div className="space-y-4 text-base">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
              <span>
                <strong>Sailor Merry Resort</strong> <br />
                ul. Mazurska 12, 11-500 Giżycko <br />
                Polska
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
              <span>
                <strong>Godziny otwarcia:</strong> <br />
                Poniedziałek – Niedziela: 8:00 – 20:00
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-600 shrink-0" />
              <a href="tel:+48123456789" className="hover:underline">
                +48 123 456 789
              </a>
            </p>

            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-600 shrink-0" />
              <a href="mailto:kontakt@sailormerry.pl" className="hover:underline">
                kontakt@sailormerry.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
