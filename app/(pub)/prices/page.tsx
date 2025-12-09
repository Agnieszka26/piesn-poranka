import OfferCard from "../components/molecules/OfferCard";
import image1 from "../assets/images/image_1.jpg";
import image2 from "../assets/images/image_2.jpg";
import image3 from "../assets/images/image_3.jpg";
export default function OfertyPage() {
  const offers = [
    {
      title: "Weekend",
      image: image1,
      tag: "Bestseller",
      features: [
        { icon: "⭐", text: "Specjalne warunki anulacji" },
        { icon: "💳", text: "40% przedpłaty" },
        { icon: "🍽️", text: "HB – Śniadanie i obiadokolacja" },
      ],
      price: 1043,
      priceInfo: "za pobyt",
      availability:
        "Dostępność między 29 gru 2025 – 2 sty 2026. Minimum 2 noce",
    },
    {
      title: "Tydzień",
      image: image2,
      features: [
        { icon: "🔒", text: "Oferta bezzwrotna – korzystna cena" },
        { icon: "💳", text: "100% przedpłaty" },
        { icon: "🍳", text: "Śniadanie w cenie" },
      ],
      oldPrice: 690,
      price: 483,
      priceInfo: "za pobyt",
      availability: "Dostępna do 10 gru 2026. Pobyt 2 noce",
    },
    {
      title: "Święta",
      image: image3,
      features: [
        { icon: "⭐", text: "Specjalne warunki anulacji" },
        { icon: "💳", text: "40% przedpłaty" },
        { icon: "🍳", text: "Śniadanie w cenie" },
      ],
      price: 300,
      priceInfo: "za noc",
      availability: "Dostępna do 31 gru 2026",
    },
  ];

  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white text-center py-6">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl mb-10">Cennik</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <OfferCard key={index} offer={offer} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
