"use client";
import { motion, AnimatePresence } from "framer-motion";
import AvailabilityCalendar from "../molecules/AvailabilityCalendar";
import { texts } from "../../assets/texts/texts";
import { useEffect, useState } from "react";

export default function Hero({ imgs }: { imgs: string[] }) {
  const general = texts.general;
  // Lista zdjęć tła

  const [index, setIndex] = useState(0);

  const variants = {
    enter: {
      x: "100%", // start w prawej części ekranu
    },
    center: {
      x: 0, // widoczny środek
    },
    exit: {
      x: "-100%", // przesuwa się poza ekran w lewo
    },
  };

  useEffect(() => {
    if (!imgs.length) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <section
      className="relative h-screen md:min-h-[600px] min-h-[1200px] flex items-center justify-center text-white overflow-hidden"
      aria-label={`Hero — ${general.title}`}
    >
      <div className="fixed inset-0 overflow-hidden -z-50">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center -z-10 "
            style={{ backgroundImage: `url(${imgs[index]})` }}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />{" "}
        </AnimatePresence>{" "}
      </div>

      {/* Zawartość */}
      <div className="relative z-10 px-4 md:pt-32 text-center max-w-4xl">
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
          className="flex flex-wrap justify-center gap-3 pb-12"
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
