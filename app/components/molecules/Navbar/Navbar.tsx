"use client";
import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { texts } from "@/app/assets/texts/texts";
import { MediaIcon } from "./MediaIcon";
import NavbarLiElement from "./NavbarLiElement";
import { links } from "./links";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const general = texts.general;
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
            <Phone className="w-4 h-4" /> <span>+48 720 501 171</span>
          </span>
          <span className="flex items-center space-x-1">
            <Mail className="w-4 h-4" /> <span>piesnporanka@gmail.com</span>
          </span>
        </div>
        <div className="flex space-x-3 text-lg">
          <MediaIcon
            icon={SiFacebook}
            href={"https://www.facebook.com/piesnporanka"}
          />
          <MediaIcon
            icon={SiInstagram}
            href={"https://www.instagram.com/odpoczywam.w.gorach/"}
          />
        </div>
      </div>

      {/* Główne menu */}
      <div className="flex justify-between items-center px-6 md:px-8 py-3">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wider">
          {general.title}
        </div>

        {/* Menu desktopowe */}
        <ul className="hidden md:flex space-x-8 font-medium uppercase text-sm">
          {links.map((link) => (
            <NavbarLiElement
              key={link.label}
              href={link.href}
              label={link.label}
            />
          ))}
        </ul>

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
        className={` w-screen md:hidden fixed top-0 left-0 h-full bg-white text-black shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <div className="text-xl font-bold">{general.title}</div>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-6 uppercase text-sm font-medium -mt-1 bg-white shadow-lg h-screen w-screen">
          {links.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              <li key={link.label}>{link.label}</li>
            </Link>
          ))}

        </ul>
      </div>
    </nav>
  );
}
