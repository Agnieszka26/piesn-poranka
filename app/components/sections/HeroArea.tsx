'use client'
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import image_1 from "../../assets/images/image_1.jpg"

export default function Hero() {
  const [dates, setDates] = useState({ arrive: "", depart: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const checkDates = (e: React.FormEvent) => {
    e.preventDefault();
    const { arrive, depart } = dates;
    if (!arrive || !depart) {
      alert("Proszę podać datę przyjazdu i wyjazdu.");
      return;
    }
    if (depart < arrive) {
      alert("Data wyjazdu nie może być przed datą przyjazdu.");
      return;
    }
    alert(`Sprawdzam dostępność od ${arrive} do ${depart}`);
  };

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
        <motion.form
          onSubmit={checkDates}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["arrive", "depart"].map((field) => (
            <label
              key={field}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg shadow-md text-sm"
            >
              <CalendarDays className="w-4 h-4" />
              <input
                type="date"
                name={field}
                value={dates[field as "arrive" | "depart"]}
                onChange={handleChange}
                className="bg-transparent outline-none text-white placeholder-white/70 text-sm"
              />
            </label>
          ))}

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition font-semibold uppercase tracking-wide shadow-lg"
          >
            Sprawdź termin
          </button>
        </motion.form>

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
