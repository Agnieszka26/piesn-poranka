// components/Footer.tsx
"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* === Kolumna 1: Ważne pliki === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Ważne pliki</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/polityka-prywatnosci" className="hover:text-white transition">
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="/polityka-cookies" className="hover:text-white transition">
                Polityka cookies
              </Link>
            </li>
            <li>
              <Link href="/regulamin-wynajmu" className="hover:text-white transition">
                Regulamin wynajmu
              </Link>
            </li>
          </ul>
        </div>

        {/* === Kolumna 2: Oferta === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Oferta</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/cennik" className="hover:text-white transition">
                Cennik
              </Link>
            </li>
            <li>
              <Link href="/rezerwacja" className="hover:text-white transition">
                Rezerwacja
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="hover:text-white transition">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="/o-nas" className="hover:text-white transition">
                O nas
              </Link>
            </li>
            <li>
              <Link href="/atrakcje" className="hover:text-white transition">
                Atrakcje
              </Link>
            </li>
            <li>
              <Link href="/aktualnosci" className="hover:text-white transition">
                Aktualności
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white transition">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* === Kolumna 3: Social media === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Znajdź nas</h3>
          <p className="mb-4 text-sm">
            Dołącz do nas w mediach społecznościowych, aby być na bieżąco z nowościami i promocjami!
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* === Dolny pasek === */}
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-sm text-gray-500">
        <p>© {year} Sailor Merry Resort. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
