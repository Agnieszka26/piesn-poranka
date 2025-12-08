"use client";

import { motion } from "framer-motion";
import image_1 from "../../assets/images/image_1.jpg";
import AvailabilityCalendar from "../molecules/AvailabilityCalendar";
import { texts } from "../../assets/texts/texts";

export default function Hero() {
  const general = texts.general;
  const hero = texts.hero;
  return (
    <section
      className="relative h-screen md:min-h-[600px] min-h-[1200px] flex items-center justify-center text-white overflow-hidden"
      aria-label={`Hero — ${general.title}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${image_1.src})`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Zawartość */}
      <div className="relative z-10 px-4 pt-12 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="block mb-4 font-bold tracking-wider text-sm sm:text-base text-white/80"
        >
          {hero.heroTitle}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-light mb-2 drop-shadow-lg"
        >
          {general.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 mb-8"
        >
          {general.slogan}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 pb-12 "
        >
          <AvailabilityCalendar />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 text-sm text-white/70 pt-12"
          href="#offers"
        >
          CZYTAJ WIĘCEJ ↓
        </motion.a>
      </div>
    </section>
  );
}
