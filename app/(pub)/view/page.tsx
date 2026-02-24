import Image, { StaticImageData } from "next/image";
import image_02 from "../assets/images/02.jpg"
import image_2 from "../assets/images/czerwcowka.jpg";
import image_03 from "../assets/images/03.jpg";
import image_04 from "../assets/images/04.jpg";
import image_05 from "../assets/images/05.jpg";
import image_06 from "../assets/images/06.jpg";
import image_07 from "../assets/images/07.jpg";
import image_08 from "../assets/images/08.jpg";
import image_09 from "../assets/images/09.jpg";
import image_10 from "../assets/images/10.jpg";
import image_11 from "../assets/images/11.jpg";
import image_14 from "../assets/images/14.jpg";
import jesien05 from "../assets/images/jesien05.jpg";
import jesień1 from "../assets/images/jesien1.jpg";
import ferie from "../assets/images/ferie_snowboard.jpg";
import Link from "next/link";

const ImageElement = ({ img, alt }: { img: StaticImageData; alt: string }) => {
  return <div className="my-8">
    <div className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden shadow-md">
      <Image
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 900px"
        className="object-cover"
      />
    </div>
  </div>
}
const ParagraphElement = ({ text }: { text: string }) => {
  return <p className="text-gray-700 text-xl">{text}</p>
}
export default function ViewPage() {
  return (
    <>
      <div className="w-full h-[90px] md:h-[125px] bg-primary-green"></div>
      <main className="w-full bg-white py-12 px-12">
        <section className="container mx-auto px-12">
          <h1 className="text-4xl mb-10">
            Okolica Pieśni Poranka – przestrzeń, którą naprawdę czuć
          </h1>

          <div className="text-lg leading-relaxed space-y-6 mb-12">
            <ParagraphElement text={`Wychodzisz z domku i pierwsze, co widzisz, to otwarta przestrzeń i góry na horyzoncie.`} />
            <ImageElement img={image_2} alt="otwarta przestrzeń i góry na horyzoncie" />
            <ParagraphElement text={`Przed Tobą pasmo babiogórskie, Pilsko, a przy dobrej widoczności nawet Tatry. Nie ściana lasu pod nosem, nie ciasna zabudowa – tylko widok, który daje oddech.`} />

            <ImageElement img={image_02} alt="taras z panoramą gór" />
            <ParagraphElement text={`Na podwórku czeka taras z panoramą gór, huśtawka kokon, hamak, miejsce na ognisko i duża drewniana altana. `} />
            <ImageElement img={image_03} alt="Hamak w górach" />
            <ImageElement img={image_04} alt="Palenisko w górach" />

            <ParagraphElement text={`Obok plac zabaw dla dzieci. A kilka kroków dalej – prywatne jacuzzi z widokiem na góry, które o zachodzie słońca robi naprawdę wyjątkowy klimat.`} />
            <ImageElement img={image_05} alt="plac zabaw dla dzieci przy domku w górach" />
            <ParagraphElement text={`Tu nie trzeba nigdzie jechać, żeby poczuć, że jesteś w górach.`} />
            <p className="font-semibold text-xl mt-12">Spacer zaczyna się pod drzwiami</p>
            <ParagraphElement text={`Domek stoi tuż przy łąkach i szlakach turystycznych. Wystarczy wyjść i możesz iść przed siebie – w stronę lasu, w stronę widoku, w stronę ciszy.`} />
            <ImageElement img={image_06} alt="szlak turystyczny przy domku w górach" />
            <ParagraphElement text={`W pobliżu znajdują się m.in. szlaki prowadzące na Leskowiec oraz mniej uczęszczane trasy idealne na spokojne, rodzinne wędrówki. Ciekawym punktem są skałki Zamczysko – krajobrazowe, surowe, z charakterem. `} />
            <ImageElement img={image_07} alt="skałki Zamczysko" />
            <ImageElement img={image_08} alt="skałki Zamczysko" />

            <ParagraphElement text={`W okolicy znajdziesz też dawne domki pasterskie ukryte w lesie, do których prowadzi około 30-minutowy spacer.`} />

            <ImageElement img={image_09} alt="skałki Zamczysko" />
            <ImageElement img={image_10} alt="skałki Zamczysko" />
            <p className="text-gray-600">Szczegółowe propozycje tras opisaliśmy na podstronie <Link href="/news" className="text-primary-green font-semibold">Wycieczki</Link>
            </p>

            <p className="font-semibold text-xl mt-12">W stronę doliny – Kocierz i rzeka</p>
            <ParagraphElement text={`Z góry można zejść w dół do Kocierza. W dolinie znajduje się kościół położony nad rzeką Kocierzanką. To spokojne, klimatyczne miejsce, w którym słychać tylko wodę i ptaki.`} />
            <ImageElement img={image_11} alt="Strumyk w górach" />
            <ParagraphElement text={`Nad rzeką są przygotowane miejsca biwakowe, a w upalne dni wiele osób korzysta z naturalnych zakoli rzeki do ochłody. Im wyżej w stronę źródeł, tym woda czystsza i bardziej przejrzysta. To jedna z tych mniej oczywistych perełek, które znają głównie lokalni.`} />
            <p className="font-semibold text-xl mt-12">Aktywnie – rowery, woda, góry</p>
            <ParagraphElement text={`Miłośnicy rowerów docenią bliskość trasy Velo Soła, prowadzącej m.in. w kierunku Jeziora Żywieckiego. To jedna z najładniejszych tras rowerowych w regionie – widokowa i odpowiednia również dla rodzin.
W około 20 minut dojedziesz nad Jezioro Żywieckie, gdzie czekają wypożyczalnie sprzętu wodnego, kajaki, SUP-y, rowerki wodne oraz możliwość żeglowania.
Dla rodzin ciekawą opcją jest także Park Inwałd – z parkiem miniatur, smoków, dinozaurów i atrakcjami inspirowanymi światem baśni.
`} />
            <p className="font-semibold text-xl mt-12">Zima – widok, cisza i góry</p>
            <ParagraphElement text={`Zimą okolica zamienia się w spokojną, śnieżną przestrzeń. W pobliżu są naturalne górki do zjeżdżania na sankach, a teren sprzyja wędrówkom i skiturom.`} />
            <ImageElement img={ferie} alt="Zima w górach, snowboard" />
            <ParagraphElement text={`W czasie do 45 minut można dojechać do ośrodków narciarskich: Korbielów, Szczyrk, Czarny Groń czy Góra Żar. Po dniu na stoku wracasz do ciepłego domku i patrzysz na góry z tarasu albo z jacuzzi.
`} />
            <p className="font-semibold text-xl mt-12">Jesień – złota i prawdziwa</p>
            <ImageElement img={jesień1} alt="Jesień w górach" />
            <ParagraphElement text={`Jesień w Beskidzie Małym to cisza, kolory i zapach lasu. Okolica Pieśni Poranka staje się wtedy rajem dla grzybiarzy. To czas złotej polskiej jesieni, miękkiego światła i długich spacerów bez tłumów.`} />
            <ImageElement img={image_14} alt="Złota jesień w górach" />
            <ImageElement img={jesien05} alt="Jesień w górach, grzyby" />
          </div>
        </section>
      </main>
    </>
  );
}
