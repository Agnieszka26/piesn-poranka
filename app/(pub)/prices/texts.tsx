import ferie_snowboard from "../assets/images/ferie_snowboard.jpg";
import wielkanoc from "../assets/images/wielkanoc.jpg";
import majowka from "../assets/images/majowka.jpg";
import czerwcowka from "../assets/images/czerwcowka.jpg";
import wakacje from "../assets/images/wakacje.png";
import bozenarodzenie from "../assets/images/bozenarodzenie.jpg";
import sylwester from "../assets/images/sylwester.png";
import trzechkroli from "../assets/images/trzechkroli.jpg";
import sezonniski from "../assets/images/sezonniski.jpg";
import jacuzzi from "../assets/images/jacuzzy.jpg";
import malypiesek from "../assets/images/malypiesek.jpg";
import rabaty from "../assets/images/rabaty.jpg";
import { PriceCardProps } from "../typesProps";

export const pricesCONST: PriceCardProps[] = [
  {
    title: "Sezon Niski ",
    key: "SEZON_NISKI",
    image: sezonniski,
    date: "pomiędzy niżej wymienionymi terminami",
    features: [
      { icon: "⏳", text: "minimum 2 doby" },
      { icon: "💳", text: "30% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
    ],
    attractions: [
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
        icon: "🌊",
        text: "Jezioro Żywieckie",
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
    title: "Ferie zimowe",
    key: "FERIE_ZIMOWE",
    image: ferie_snowboard,
    date: "19.01 - 1.03.2026",
    features: [
      { icon: "⏳", text: "minimum 4 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
    ],
    attractions: [
      { icon: "🛷", text: "Sąsiedztwo górek do zjeżdżania na sankach" },
      { icon: "🎿", text: "Teren idealny pod skitoury, back-country" },
      {
        icon: "⛷️",
        text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń, Korbielów",
      },
    ],
    price: 590,
     oldPrice: null,
    priceInfo: "doba",
    availability:
      "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
  },

  {
    title: "Święta Wielkanocne",
    key: "WIELKANOC",
    image: wielkanoc,
    date: "3.04-7.04.2026",
    features: [
      { icon: "⏳", text: "minimum 4 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
    ],
    attractions: [
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
    key: "MAJOWKA",
    image: majowka,
    date: "29.04-3.05.2026",
    features: [
      { icon: "⏳", text: "minimum 3 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
    ],
    attractions: [
      {
        icon: "🥾",
        text: "Bliskość szlaków turystycznych",
      },
      {
        icon: "🪨",
        text: "Skały Zamczysko",
      },
      {
        icon: "🌊",
        text: "Jezioro Żywieckie",
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
    oldPrice: null,
    priceInfo: "doba",
    availability:
      "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
  },
  {
    title: "Czerwcówka / Boże Ciało",
    key: "CZERWCOWKA",
    image: czerwcowka,
    date: "4.06-7.06.2026",
    features: [
      { icon: "⏳", text: "minimum 3 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
    ],
    attractions: [
      {
        icon: "🥾",
        text: "Bliskość szlaków turystycznych",
      },
      {
        icon: "🪨",
        text: "Skały Zamczysko",
      },
      {
        icon: "🌊",
        text: "Jezioro Żywieckie ",
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
    oldPrice: null,
    priceInfo: "doba",
    availability:
      "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
  },
  {
    title: "Wakacje",
    key: "WAKACJE",
    image: wakacje,
    date: "27.06-31.08.2026",
    features: [
      { icon: "⏳", text: "minimum 3 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł/doba, max 7 osób" },
    ],
    attractions: [
      {
        icon: "🥾",
        text: "Bliskość szlaków turystycznych",
      },
      {
        icon: "🪨",
        text: "Skały Zamczysko",
      },
      {
        icon: "🌊",
        text: "Jezioro Żywieckie",
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
    oldPrice: null,
    priceInfo: "doba",
    availability:
      "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
  },
  {
    title: "Święta BOŻEGO NARODZENIA",
    key: "BOZE_NARODZENIE", 
    image: bozenarodzenie,
    tag: "Bestseller",
    date: "23.12-29.12.2026",
    features: [
      { icon: "⏳", text: "minimum 4 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
    ],
    attractions: [
      {
        icon: "🎄",
        text: "choinka (przystrojona, lub do strojenia w zależności od życzenia)",
      },
      { icon: "🌟", text: "lampki świąteczne na posesji domku" },
      { icon: "🛷", text: "Sąsiedztwo górek do zjeżdżania na sankach" },
      { icon: "🎿", text: "Teren idealny pod skitoury, back-country" },
      {
        icon: "⛷️",
        text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń, Korbielów",
      },
    ],
    price: 690,
    oldPrice: null,
    priceInfo: "doba",
    availability:
      "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
  },
  {
    title: "Sylwester i Nowy Rok",
    key: "SYLWESTER",
    image: sylwester,
    date: "30.12.2026-2.01.2027",

    features: [
      { icon: "⏳", text: "minimum 4 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
    ],
    attractions: [
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
      { icon: "🎿", text: "Teren idealny pod skitoury, back-country" },
      {
        icon: "⛷️",
        text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń, Korbielów",
      },
    ],
    price: 990,
    oldPrice: null,
    priceInfo: "doba",
    availability:
      "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
  },
  {
    title: "Trzech Króli",
    key: "TRZECH_KROLI",
    image: trzechkroli,
    date: "3.01-6.01.2027 ",
    features: [
      { icon: "⏳", text: "minimum 3 doby" },
      { icon: "💳", text: "35% zaliczki" },
      {
        icon: "👨‍👩‍👧‍👦",
        text: "ceny obowiązują do 5ciu osób.",
      },
      { icon: "➕", text: "Każda kolejna osoba: +50 zł / doba" },
    ],
    attractions: [
      {
        icon: "🎄",
        text: "przystrojona choinka ",
      },
      { icon: "🌟", text: "lampki świąteczne na posesji domku" },
      { icon: "🛷", text: "Sąsiedztwo górek do zjeżdżania na sankach" },
      { icon: "🎿", text: "Teren idealny pod skitoury, back-country" },
      {
        icon: "⛷️",
        text: "Najbliższe stoki narciarskie: Góra Żar, Czarny Groń, Korbielów",
      },
    ],
    price: 690,
    oldPrice: null,
    priceInfo: "doba",
    availability:
      "Koszty energii elektrycznej, wody, pelletu do kominka, drewna na ognisko wliczone w cenę najmu",
  },

  {
    title: "Jacuzzi",
      key: "JACUZZI",
    image: jacuzzi,
    features: [
      { icon: "🛁", text: "dostępne przez cały rok" },
      { icon: "⏳", text: "minimum 2 doby" },
    ],
    price: 150,
    oldPrice: null,
    priceInfo: "doba",
    availability:
      "W razie chęci korzystania prosimy o informacje 2 doby przed przyjazdem",
  },
  {
    title: "Zwierzęta",
      key: "ZWIERZETA",
    image: malypiesek,
    features: [
      {
        icon: "",
        text: "przyjmujemy niewielkie zwierzęta po uprzednim uzgodnieniu",
      },
    ],
    price: 30,
    oldPrice: null,
    priceInfo: "doba",
  },
  {
    title: "RABATY",
      key: "RABATY",
    image: rabaty,
    features: [
      { icon: "👥", text: "Pobyt dla 2 osób: –10%" },
      { icon: "📅", text: "Pobyt powyżej 7 dni: –10%" },
      { icon: "🤝", text: "Rabat dla stałych klientów: –5%" },
    ],
    oldPrice: null,
    availability:
      "Rabat dla stałych klientów może się sumować, albo z rabatem dla 2 osób, lub rabatem powyżej 7 dni.",
  },
];
