import Image, { StaticImageData } from "next/image";
import image_1 from "../assets/images/majowka.jpg";
import image_2 from "../assets/images/czerwcowka.jpg";
import image_3 from "../assets/images/sezonniski.jpg";
import image_4 from "../assets/images/trzechkroli.jpg";
import zima1 from "../assets/images/zima1.jpg";
import zima2 from "../assets/images/zima2.jpg";
import zima3 from "../assets/images/zima3.jpg";
import zima4 from "../assets/images/zima4.jpg";
import jesień1 from "../assets/images/jesien1.jpg";
import jesień2 from "../assets/images/jesien2.jpg";
import jesień3 from "../assets/images/jesien3.jpg";
import jesień4 from "../assets/images/jesien4.jpg";
import lato1 from "../assets/images/lato1.jpg";
import lato2 from "../assets/images/lato2.jpg";
import lato3 from "../assets/images/lato3.jpg";
import lato4 from "../assets/images/lato4.jpg";


const ImagesElement = ({
  images,
}: {
  images: { img: StaticImageData; alt: string }[];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((imageObj, index) => {return <div key={index} className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
        <Image src={imageObj.img} alt={imageObj.alt} fill className="object-cover" />
      </div>})}
      </div>
  );
};

export default function ViewPage() {
  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white py-12 px-12">
        <section className="container mx-auto px-12">
          <h1 className="text-3xl mb-10">
            Okolica – natura, aktywny wypoczynek i lokalne atrakcje
          </h1>

          <div className="text-lg leading-relaxed space-y-6 mb-12">
            <p className="text-gray-600">
              Pieśń Poranka to miejsce, w którym górska cisza spotyka się z
              bogactwem atrakcji dostępnych o każdej porze roku. Niezależnie od
              tego, czy marzysz o aktywnym wypoczynku, rodzinnych przygodach czy
              spokojnym kontakcie z naturą – wszystko masz na wyciągnięcie ręki.
            </p>
            <ImagesElement
              images={[
                { img: image_1, alt: "wiosna w górach" },
                { img: image_2, alt: "lato w domku" },
                { img: image_3, alt: "raj dla grzybiarzy" },
                { img: image_4, alt: "zima w górach" },
              ]}
            />
            <p className="font-semibold text-xl mt-12">Zima pełna radości</p>
            <p className="text-gray-600">
              Tuż obok domku znajdują się górki idealne do zjeżdżania na
              sankach, które zimą zamieniają się w prawdziwy raj dla dzieci i
              dorosłych. Okolica sprzyja również narciarstwu biegowemu – łagodne
              tereny i piękne widoki zachęcają do spokojnych, zimowych wędrówek
              na nartach. Miłośnicy narciarstwa zjazdowego docenią bliskość
              renomowanych ośrodków: Góra Żar Czarny Groń
            </p>
             <ImagesElement
              images={[
                { img: zima1, alt: "zima" },
                { img: zima2, alt: "zima" },
                { img: zima3, alt: "zima" },
                { img: zima4, alt: "zima" },
              ]}
            />
            <p className="font-semibold text-xl mt-12">Góry, które zapraszają przez cały rok</p>
            <p className="text-gray-600">
              Domek położony jest w pobliżu szlaków turystycznych, ścieżek spacerowych oraz malowniczych formacji skalnych Zamczysko. To idealne miejsce na piesze wędrówki, poranne spacery i odkrywanie beskidzkiej przyrody w swoim tempie.
            </p>
                        <p className="font-semibold text-xl mt-12">Jesienny raj dla grzybiarzy</p>
            <p className="text-gray-600">
              Jesienią okoliczne lasy zamieniają się w prawdziwy raj dla miłośników grzybobrania. Cisza, zapach lasu i kosz pełen darów natury – trudno o lepszy sposób na odpoczynek.
            </p>
             <ImagesElement
              images={[
                { img: jesień1, alt: "jesień" },
                { img: jesień2, alt: "jesień" },
                { img: jesień3, alt: "jesień" },
                { img: jesień4, alt: "jesień" },
              ]}
            />
<p className="font-semibold text-xl mt-12">Woda i relaks latem</p>
            <p className="text-gray-600">
   Zaledwie około 20 minut jazdy samochodem dzieli Cię od:

Jeziora Żywieckiego

plaży miejskiej

wypożyczalni sprzętu wodnego

To doskonała propozycja na letnie dni – kąpiele, sporty wodne i relaks nad wodą.  </p>
                        <p className="font-semibold text-xl mt-12">Atrakcje dla całej rodziny</p>
            <p className="text-gray-600">
        W okolicy nie brakuje miejsc wartych odwiedzenia:

Skansen w Ślemieniu

Rynek w Żywcu

Park Inwałd

oraz wiele innych lokalnych atrakcji, które urozmaicą każdy pobyt</p>
             <ImagesElement
              images={[
                { img: lato1, alt: "lato" },
                { img: lato2, alt: "lato" },
                { img: lato3, alt: "lato" },
                { img: lato4, alt: "lato" },
              ]}
            />

          </div>
        </section>
      </main>
    </>
  );
}
