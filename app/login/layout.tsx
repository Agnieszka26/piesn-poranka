import type { Metadata } from "next";
import { Montserrat, Qwigley } from "next/font/google";
import "../../app/globals.css";

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
  openGraph: {
    type: "website",
    url: "/login",
    title: "Pieśń Poranka - odpoczywam w górach",
    description:
      "Oferujemy Państwu pobyt w domku wypoczynkowym w górach położonym na malowniczej działce na wysokości 740m n.p.m. we wsi Łysina, w Beskidzie Małym na grani Ścieszków Gronia.",
    siteName: "Pieśń Poranka",
    locale: "pl_PL",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pieśń Poranka - odpoczywam w górach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pieśń Poranka - odpoczywam w górach",
    description:
      "Oferujemy Państwu pobyt w domku wypoczynkowym w górach położonym na malowniczej działce na wysokości 740m n.p.m. we wsi Łysina, w Beskidzie Małym na grani Ścieszków Gronia.",
    images: ["/og/og-image.png"],
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
       
        {children}
      
      </body>
    </html>
  );
}
