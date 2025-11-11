'use client'
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import image_1 from "../../assets/images/image_1.jpg"
import AvailabilityCalendar from "../molecules/AvailabilityCalendar";

export default function Hero() {




  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden"
      aria-label="Hero — Hotel Tajty"
    >
      {/* Tło - zamień ścieżkę na własny obraz */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${image_1.src})`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Zawartość */}
      <div className="relative z-10 px-4 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="block mb-4 font-semibold tracking-wider text-sm sm:text-base text-white/80"
        >
          HOTEL TAJTY — Wellness & Spa
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-light mb-2 drop-shadow-lg"
        >
          Hotel Tajty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 mb-8"
        >
          na Mazurach
        </motion.p>

        {/* Formularz */}
        <motion.div
         
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <AvailabilityCalendar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 text-sm text-white/70"
        >
          CZYTAJ WIĘCEJ ↓
        </motion.div>
      </div>
    </section>
  );
}
