import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pieśń Poranka - odpoczywam w górach ",
  description: "Oferujemy Państwu pobyt w domku wypoczynkowym w górach położonym na malowniczej działce na wysokości 740m n.p.m. we wsi Łysina, w Beskidzie Małym na grani Ścieszków Gronia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
