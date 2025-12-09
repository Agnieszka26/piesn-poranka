// components/Footer.tsx
"use client";
import { links } from "../molecules/Navbar/links";
import Link from "next/link";
import { SiFacebook, SiInstagram } from "react-icons/si";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 border-b border-gray-500 pb-10">
        {/* === Kolumna 1: Ważne pliki === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Ważne pliki</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-white transition"
              >
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link
                href="/polityka-cookies"
                className="hover:text-white transition"
              >
                Polityka cookies
              </Link>
            </li>
            <li>
              <Link
                href="/regulamin-wynajmu"
                className="hover:text-white transition"
              >
                Regulamin wynajmu
              </Link>
            </li>
          </ul>
        </div>

        {/* === Kolumna 2: Oferta === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Oferta</h3>
          <ul className="space-y-2">
            {links.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === Kolumna 3: Social media === */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Znajdź nas</h3>
          <p className="mb-4 text-sm">
            Dołącz do nas w mediach społecznościowych, aby być na bieżąco z
            widokami i promocjami!
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/piesnporanka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <SiFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/odpoczywam.w.gorach/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <SiInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* === Dolny pasek === */}
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-sm text-gray-300">
        <p>© {year} Pieśń Poranka. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
