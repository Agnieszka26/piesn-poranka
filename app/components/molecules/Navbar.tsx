'use client'
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-black shadow-md"
          : "bg-white/10 backdrop-blur-md text-white"
      }`}
    >
      {/* Górny pasek z kontaktem */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm border-b border-white/20">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1">
            <Phone className="w-4 h-4" /> <span>+48 87 428 01 94</span>
          </span>
          <span className="flex items-center space-x-1">
            <Mail className="w-4 h-4" /> <span>recepcja@hoteltajty.pl</span>
          </span>
        </div>
        <div className="flex space-x-3 text-lg">
          <Facebook className="w-5 h-5 cursor-pointer hover:opacity-70" />
          <Instagram className="w-5 h-5 cursor-pointer hover:opacity-70" />
          <Youtube className="w-5 h-5 cursor-pointer hover:opacity-70" />
        </div>
      </div>

      {/* Główne menu */}
      <div className="flex justify-between items-center px-6 md:px-8 py-3">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wider">
          HOTEL <span className="font-bold">TAJTY</span>
        </div>

        {/* Menu desktopowe */}
        <ul className="hidden md:flex space-x-8 font-medium uppercase text-sm">
          <li className="hover:text-yellow-600 cursor-pointer">Hotel i atrakcje</li>
          <li className="hover:text-yellow-600 cursor-pointer">Oferty</li>
          <li className="hover:text-yellow-600 cursor-pointer">Pokoje i domki</li>
          <li className="hover:text-yellow-600 cursor-pointer text-[#00CFFF]">Dla dzieci</li>
          <li className="hover:text-yellow-600 cursor-pointer">Biznes</li>
          <li className="hover:text-yellow-600 cursor-pointer">Gastronomia</li>
          <li className="hover:text-yellow-600 cursor-pointer">Wellness & Spa</li>
          <li className="hover:text-yellow-600 cursor-pointer">Port</li>
          <li className="hover:text-yellow-600 cursor-pointer">Imprezy</li>
          <li className="hover:text-yellow-600 cursor-pointer">Kontakt</li>
        </ul>

        {/* Przycisk rezerwacji */}
        <button className="hidden md:block ml-6 bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-lg uppercase text-sm font-semibold">
          Rezerwuj online
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-white text-black shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-bold">
            HOTEL <span className="font-semibold">TAJTY</span>
          </div>
          <X
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Zamknij menu"
          />
        </div>

        <ul className="flex flex-col space-y-4 p-6 uppercase text-sm font-medium">
          <li className="hover:text-yellow-600 cursor-pointer">Hotel i atrakcje</li>
          <li className="hover:text-yellow-600 cursor-pointer">Oferty</li>
          <li className="hover:text-yellow-600 cursor-pointer">Pokoje i domki</li>
          <li className="hover:text-yellow-600 cursor-pointer">Dla dzieci</li>
          <li className="hover:text-yellow-600 cursor-pointer">Biznes</li>
          <li className="hover:text-yellow-600 cursor-pointer">Gastronomia</li>
          <li className="hover:text-yellow-600 cursor-pointer">Wellness & Spa</li>
          <li className="hover:text-yellow-600 cursor-pointer">Port</li>
          <li className="hover:text-yellow-600 cursor-pointer">Imprezy</li>
          <li className="hover:text-yellow-600 cursor-pointer">Kontakt</li>
        </ul>

        <div className="p-6">
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg uppercase font-semibold">
            Rezerwuj online
          </button>
        </div>
      </div>
    </nav>
  );
}
