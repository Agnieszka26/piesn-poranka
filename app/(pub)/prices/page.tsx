import OfferCard from "../components/molecules/OfferCard";
import ferie_snowboard from "../assets/images/ferie_snowboard.jpg";
import wielkanoc from "../assets/images/wielkanoc.jpg";
import majowka from "../assets/images/majowka.jpg";
import czerwcowka from "../assets/images/czerwcowka.jpg";
import wakacje from "../assets/images/wakacje.jpg";
import bozenarodzenie from "../assets/images/bozenarodzenie.jpg";
import sylwester from "../assets/images/sylwester.jpg";
import trzechkroli from "../assets/images/trzechkroli.jpg";
import sezonniski from "../assets/images/sezonniski.jpg";
import jacuzzi from "../assets/images/jacuzzy.jpg";
import malypiesek from "../assets/images/malypiesek.jpg";
import rabaty from "../assets/images/rabaty.jpg";
import { a } from "framer-motion/client";
export default function OfertyPage() {
  const offers = [
    {
      title: "Ferie zimowe",
      image: ferie_snowboard,
      features: [
        { icon: "🗓️", text: "19.01 - 1.03.2026" },
        { icon: "⏳", text: "minimum 4 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
        { icon: "🛷", text: "Sąsiedztwo górek do zjeżdżania na sankach" },
        { icon: "🎿", text: "Teren idealny do nart biegowych" },
        {
          icon: "⛷️",
          text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń",
        },
      ],
      price: 590,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },

    {
      title: "Święta Wielkanocne",
      image: wielkanoc,
      features: [
        { icon: "🗓️", text: "3.04-7.04.2026" },
        { icon: "⏳", text: "minimum 4 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
        {
          icon: "⛪",
          text: "Niedziela Palmowa w sąsiedniej wsi Gilowice",
        },
        {
          icon: "🌿",
          text: "Widowiskowe palmy przygotowane przez mieszkańców",
        },
      ],
      oldPrice: 690,
      price: 590,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
    {
      title: "Majówka",
      image: majowka,
      features: [
        { icon: "🗓️", text: "29.04-3.05.2026" },
        { icon: "⏳", text: "minimum 3 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
        {
          icon: "🥾",
          text: "Bliskość szlaków turystycznych",
        },
        {
          icon: "🪨",
          text: "Skały Zamczysko",
        },
        {
          icon: "🌊🚣",
          text: "Jezioro Żywieckie – wypożyczalnia sprzętu wodnego",
        },
        {
          icon: "🏛️",
          text: "Skansen w Ślemieniu",
        },
        {
          icon: "🏙️",
          text: "Rynek w Żywcu",
        },
        {
          icon: "🎢",
          text: "Park Inwałd",
        },
        {
          icon: "⭐",
          text: "i wiele innych atrakcji",
        },
      ],

      price: 590,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
    {
      title: "Czerwcówka / Boże Ciało",
      image: czerwcowka,
      features: [
        { icon: "🗓️", text: "4.06-7.06.2026" },
        { icon: "⏳", text: "minimum 3 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
        {
          icon: "🥾",
          text: "Bliskość szlaków turystycznych",
        },
        {
          icon: "🪨",
          text: "Skały Zamczysko",
        },
        {
          icon: "🌊🚣",
          text: "Jezioro Żywieckie – wypożyczalnia sprzętu wodnego",
        },
        {
          icon: "🏛️",
          text: "Skansen w Ślemieniu",
        },
        {
          icon: "🏙️",
          text: "Rynek w Żywcu",
        },
        {
          icon: "🎢",
          text: "Park Inwałd",
        },
        {
          icon: "⭐",
          text: "i wiele innych atrakcji",
        },
      ],

      price: 590,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
    {
      title: "Wakacje",
      image: wakacje,
      features: [
        { icon: "🗓️", text: "4.06-7.06.2026" },
        { icon: "⏳", text: "minimum 3 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
        {
          icon: "🥾",
          text: "Bliskość szlaków turystycznych",
        },
        {
          icon: "🪨",
          text: "Skały Zamczysko",
        },
        {
          icon: "🌊🚣",
          text: "Jezioro Żywieckie – wypożyczalnia sprzętu wodnego",
        },
        {
          icon: "🏛️",
          text: "Skansen w Ślemieniu",
        },
        {
          icon: "🏙️",
          text: "Rynek w Żywcu",
        },
        {
          icon: "🎢",
          text: "Park Inwałd",
        },
        {
          icon: "⭐",
          text: "i wiele innych atrakcji",
        },
      ],

      price: 590,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
    {
      title: "Święta BOŻEGO NARODZENIA",
      image: bozenarodzenie,
      tag: "Bestseller",
      features: [
        { icon: "🗓️", text: "23.12-29.12.2026" },
        { icon: "⏳", text: "minimum 4 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
        {
          icon: "🎄",
          text: "choinka (przystrojona, lub do strojenia w zależności od życzenia)",
        },
        { icon: "🌟", text: "lampki świąteczne na posesji domku" },
        { icon: "🛷", text: "Sąsiedztwo górek do zjeżdżania na sankach" },
        { icon: "🎿", text: "Teren idealny do nart biegowych" },
        {
          icon: "⛷️",
          text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń",
        },
      ],
      price: 690,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
    {
      title: "Sylwester i Nowy Rok",
      image: sylwester,

      features: [
        { icon: "🗓️", text: "30.12.2026-2.01.2027" },
        { icon: "⏳", text: "minimum 4 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
        {
          icon: "🎄",
          text: "przystrojona choinka i lampki świąteczne na posesji domku",
        },
        {
          icon: "🌟",
          text: "W Nowy Rok niesamowite widowisko sztucznych ogni w dolinach widocznych z góry",
        },
        {
          icon: "⚠️",
          text: "Uwaga: w samej okolicy domku dobrym zwyczajem jest wstrzymanie się od fajerwerków ze względu na bliskość lasu i jego mieszkańców",
        },
        { icon: "🛷", text: "Sąsiedztwo górek do zjeżdżania na sankach" },
        { icon: "🎿", text: "Teren idealny do nart biegowych" },
        {
          icon: "⛷️",
          text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń",
        },
      ],
      price: 990,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
    {
      title: "Trzech Króli",
      image: trzechkroli,
      features: [
        { icon: "🗓️", text: "3.01-6.01.2027 " },
        { icon: "⏳", text: "minimum 3 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
        {
          icon: "🎄",
          text: "przystrojona choinka ",
        },
        { icon: "🌟", text: "lampki świąteczne na posesji domku" },
        { icon: "🛷", text: "Sąsiedztwo górek do zjeżdżania na sankach" },
        { icon: "🎿", text: "Teren idealny do nart biegowych" },
        {
          icon: "⛷️",
          text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń",
        },
      ],
      price: 690,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
    {
      title: "Sezon Niski (pomiędzy wymienionymi wyżej terminami)",
      image: sezonniski,
      features: [
        { icon: "⏳", text: "minimum 2 doby" },
        { icon: "💳", text: "35% zaliczki" },
        {
          icon: "👨‍👩‍👧‍👦",
          text: "ceny obowiązują do 5ciu osób.",
        },
        { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
        {
          icon: "🥾",
          text: "Bliskość szlaków turystycznych",
        },
        {
          icon: "🍄‍🟫",
          text: "na jesień raj dla grzybiarzy",
        },
        {
          icon: "🪨",
          text: "Skały Zamczysko",
        },
        {
          icon: "🌊🚣",
          text: "Jezioro Żywieckie – wypożyczalnia sprzętu wodnego",
        },
        {
          icon: "🏛️",
          text: "Skansen w Ślemieniu",
        },
        {
          icon: "🏙️",
          text: "Rynek w Żywcu",
        },
        {
          icon: "🎢",
          text: "Park Inwałd",
        },
        {
          icon: "⭐",
          text: "i wiele innych atrakcji",
        },
      ],
      oldPrice: 590,
      price: 550,
      priceInfo: "doba",
      availability:
        "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
    },
        {
      title: "Jacuzzi",
      image: jacuzzi,
      features: [
        { icon: "🛁", text: "dostępne przez cały rok" },
        { icon: "⏳", text: "minimum 2 doby" },
      ],
      price: 150,
      priceInfo: "doba",
      availability:
        "W razie chęci korzystania prosimy o informacje 2 doby przed przyjazdem",
    },
     {
      title: "Zwierzęta",
      image: malypiesek,
      features: [
        { icon: "", text: "przyjmujemy niewielkie zwierzęta po uprzednim uzgodnieniu" },
      ],
      price: 30,
      priceInfo: "doba",
    },
         {
      title: "RABATY",
      image: rabaty,
      features: [
        { icon: "👥", text: "Pobyt dla 2 osób: –10%" },
        { icon: "📅", text: "Pobyt powyżej 7 dni: –10%" },
        { icon: "🤝", text: "Rabat dla stałych klientów: –5%" },
      ],
      availability: "Rabat dla stałych klientów może się sumować, albo z rabatem dla 2 osób, lub rabatem powyżej 7 dni."
    }
  ];

  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white text-center py-6">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl mb-10">CENNIK 2026</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <OfferCard key={index} offer={offer} />
            ))}
          </div>
          <div className="text-center p-6 mt-10">

          <p className="text-xl">ZALICZKA </p> 
          <p className="mb-2">płatna 30% na poniższe dane</p>
          <p>Adresat: Aleksandra Grzywak-Gawryś</p>
          <p>Numer konta: 03 1050 1214 1000 0098 0067 6257</p>
          </div>
         
        </section>
      </main>
    </>
  );
}
