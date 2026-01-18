import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import jakuzziidomek from "../../assets/images/jakuzziidomek.jpg";
import wnetrze from "../../assets/images/wnterze2.jpg";
import czerwcowka from "../../assets/images/czerwcowka.jpg";
import bozenarodzenie from "../../assets/images/bozenarodzenie.jpg";
import sezonniski from "../../assets/images/sezonniski.jpg";
import clsx from "clsx";
const infoTexts = [
  {
    title: "Domek w górach",
    content: `Szukasz miejsca, w którym naprawdę zwolnisz? Chcesz obudzić się przy śpiewie ptaków, z widokiem na góry i zapachem lasu za oknem? Pieśń Poranka to wyjątkowy domek w sercu natury, stworzony z myślą o tych, którzy pragną odpoczynku blisko przyrody, z dala od zgiełku miasta.

To idealne miejsce zarówno na romantyczny weekend, rodzinny wyjazd, jak i dłuższy pobyt regeneracyjny. Kameralna atmosfera, komfortowe wnętrza i otoczenie górskich krajobrazów sprawiają, że każda pora roku ma tu swój niepowtarzalny urok.

Odkryj miejsce, do którego chce się wracać.`,
    image: jakuzziidomek,
  },

  {
    title: "Dla rodzin i bliskich sobie ludzi",
    content: `Pieśń Poranka to przestrzeń przyjazna rodzinom, parom i grupom przyjaciół, którzy chcą spędzić czas razem, w rytmie natury. Bezpieczne otoczenie, bliskość szlaków spacerowych i górskich atrakcji sprzyjają wspólnym chwilom, zabawie i odpoczynkowi.

Dzieci mogą odkrywać świat przyrody, a dorośli cieszyć się ciszą, świeżym powietrzem i widokami, które uspokajają myśli. To miejsce, w którym budują się wspomnienia – przy porannej kawie na tarasie, wieczornym ognisku czy wspólnych wędrówkach po górach.

Podaruj sobie i swoim bliskim prawdziwy górski wypoczynek.`,
    image: wnetrze,
  },
  {
    title: "Relaks w zgodzie z naturą",
    content: `Pobyt w Pieśni Poranka to zaproszenie do prawdziwego relaksu. Otaczająca domek przyroda, śpiew ptaków o poranku i kojąca cisza wieczorów pozwalają odzyskać wewnętrzną równowagę.

To idealne miejsce na zwolnienie tempa – z książką, herbatą, rozmową lub po prostu z widokiem na góry. Niezależnie od pory roku, natura staje się tu najlepszym towarzyszem wypoczynku.

Oddychaj głęboko. Tu wszystko płynie wolniej.`,
    image: czerwcowka,
  },
  {
    title: "Udogodnienia – komfortowy, całoroczny domek w górach",
    content: `Pieśń Poranka to komfortowy, całoroczny domek w górach, położony w cichej i spokojnej okolicy, z dala od miejskiego hałasu. To idealne miejsce na wypoczynek w Beskidach dla osób szukających ciszy, prywatności i bliskości natury.

Z okien oraz tarasu rozciągają się piękne widoki na góry, które zachwycają o każdej porze roku. Domek jest przystosowany do pobytów zarówno letnich, jak i zimowych – w chłodniejsze dni przytulną atmosferę zapewnia kominek, a w upalne dni komfort zwiększa klimatyzacja.

Na Gości czeka prywatna strefa relaksu, idealna do regeneracji po dniu spędzonym na szlaku:

jacuzzi,

taras wypoczynkowy,

hamak,

miejsce na ognisko i grill,

plac zabaw dla dzieci.

Wysoki standard wyposażenia sprawia, że domek w górach z jacuzzi spełnia oczekiwania nawet najbardziej wymagających Gości. Do dyspozycji jest m.in. pralka, zmywarka, ekspres do kawy oraz pełne wyposażenie umożliwiające komfortowy, dłuższy pobyt.

Bliskość natury, kameralna atmosfera i nowoczesne udogodnienia tworzą idealne warunki do wypoczynku przez cały rok.`,
    image: bozenarodzenie,
  },
  {
    title: "Atrakcje w okolicy – Beskidy o każdej porze roku",
    content: `Położenie domku Pieśń Poranka sprzyja aktywnemu wypoczynkowi i odkrywaniu uroków Beskidów. Bliskość szlaków turystycznych umożliwia piesze wędrówki i spacery w otoczeniu górskiej przyrody bez konieczności długich dojazdów.

Atrakcje letnie:

około 20 minut samochodem do Jeziora Żywieckiego, plaży miejskiej oraz wypożyczalni sprzętu wodnego,

Rynek w Żywcu z licznymi restauracjami i kawiarniami,

Skansen w Ślemieniu – idealny na rodzinny wypad,

Park Inwałd i inne atrakcje turystyczne regionu.

Atrakcje zimowe:

sąsiedztwo górek idealnych do zjeżdżania na sankach,

tereny doskonałe do narciarstwa biegowego,

łatwy dojazd do popularnych stoków narciarskich: Góra Żar oraz Czarny Groń.

Niezależnie od pory roku, nocleg w górach w okolicy Żywca to doskonała baza wypadowa zarówno dla miłośników aktywnego wypoczynku, jak i osób szukających spokojnego miejsca na regenerację.`,
    image: sezonniski,
  },
];

const InfoElement = ({
  title,
  content,
  image,
  i,
}: {
  title: string;
  content: string;
  image: StaticImageData;
  i: number;
}) => {
  const isReversed = i % 2 !== 0;

  return (
    <div className="mx-auto max-w-7xl px-6 flex ">
      <div
        className={clsx(
          "mx-auto max-w-7xl px-6 grid gap-12 items-center",
          "grid-cols-1 lg:grid-cols-2",
          isReversed && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2  className={clsx("text-2xl md:text-4xl mt-12 font-light mb-6", isReversed ? "md:text-left" : "md:text-right")}>{title}</h2>

          <p className={clsx("text-gray-600 leading-relaxed max-w-xl mb-8", isReversed ? "md:text-left" : "md:text-right")}>
            {content}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-80 sm:h-[420px] lg:h-[520px]"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-3xl"
            priority={i === 0}
          />
        </motion.div>
      </div>
    </div>
  );
};

const InfoSection = () => {
  return (
    <section className="bg-white py-16">
      {infoTexts.map((info, index) => (
        <InfoElement
          key={index}
          title={info.title}
          content={info.content}
          image={info.image}
          i={index}
        />
      ))}
    </section>
  );
};

export default InfoSection;
