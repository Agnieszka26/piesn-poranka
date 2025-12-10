import Image from "next/image";
import image_1 from "../assets/images/oferta_1.jpg";
import image_2 from "../assets/images/oferta_2.jpg";
import image_3 from "../assets/images/oferta_3.jpg";
import image_4 from "../assets/images/image_3.jpg";

export default function ViewPage() {
  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white text-center py-6">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl mb-10">
            Przystań żeglarska na Mazurach
          </h1>

          <div className="text-lg leading-relaxed space-y-6 mb-12">
            <p className="text-xl mb-10">
              Nasza marina na ponad 100 miejsc cumowniczych, zlokalizowana jest
              pomiędzy jeziorem Niegocin i Kisajno oraz pomiędzy kanałami
              Niegocińskim i Piękna Góra, w dogodnym położeniu nad osłoniętym od
              wiatru jeziorem Tajty.
            </p>
            <p className="text-gray-600">
              Rozpościerająca się przed naszym hotelem przystań jachtowa jest
              miejscem chętnie odwiedzanym przez żeglarzy i wszystkie osoby
              pragnące poczuć żeglarski klimat. Bezpieczne pomosty z możliwością
              skorzystania z wody i prądu, nowoczesne sanitariaty, muringi,
              slip, miejsce na grilla i ognisko, WiFi, urządzenie do
              odpompowywania ścieków z jachtów — to jedne z licznych udogodnień
              przygotowanych z myślą o żeglarzach i motorowodniakach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={image_1} alt="Marina" fill className="object-cover" />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={image_2}
                alt="Pomost i kajaki"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={image_3}
                alt="Sanitariat"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={image_4}
                alt="Port wieczorem"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
