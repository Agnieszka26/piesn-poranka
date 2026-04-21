import type { Metadata } from "next";
import { Montserrat, Qwigley } from "next/font/google";
import "../../app/globals.css";
import Navbar from "./components/molecules/Navbar/Navbar";
import Footer from "./components/molecules/Footer";

const siteUrl = new URL("https://www.piesnporanka.pl");

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const qwigley = Qwigley({
variable: "--font-qwigley",
subsets: ["latin"],
weight: "400"
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Pieśń Poranka - odpoczywam w górach",
  description:
    "Oferujemy Państwu pobyt w domku wypoczynkowym w górach położonym na malowniczej działce na wysokości 740m n.p.m. we wsi Łysina, w Beskidzie Małym na grani Ścieszków Gronia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Pieśń Poranka - odpoczywam w górach",
    description:
      "Oferujemy Państwu pobyt w domku wypoczynkowym w górach położonym na malowniczej działce na wysokości 740m n.p.m. we wsi Łysina, w Beskidzie Małym na grani Ścieszków Gronia.",
    siteName: "Pieśń Poranka",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pieśń Poranka - odpoczywam w górach",
    description:
      "Oferujemy Państwu pobyt w domku wypoczynkowym w górach położonym na malowniczej działce na wysokości 740m n.p.m. we wsi Łysina, w Beskidzie Małym na grani Ścieszków Gronia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={` ${qwigley.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
