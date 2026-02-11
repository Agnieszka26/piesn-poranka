import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import wnetrze3 from "../../assets/images/wnetrze4.jpg";
import czerwcowka from "../../assets/images/czerwcowka.jpg";
import wakacje from "../../assets/images/wakacje.jpg";
import dlaRodzin from "../../assets/images/dlaRodzin.jpg";
import widoknagory from "../../assets/images/widoknagory2.png";
import clsx from "clsx";
const infoTexts = [
  {
    title: "Domek w górach, w którym zwalniasz od pierwszego poranka",
    content: `Są miejsca, w których od razu czujesz, że możesz odetchnąć.
 Budzisz się przy wschodzącym słońcu, a zamiast hałasu słyszysz śpiew ptaków i ciszę gór.
 Przez okno wpada światło, a przed Tobą rozciąga się widok, który uspokaja myśli.
Pieśń Poranka powstała właśnie z tych chwil – z poranków pełnych światła, spokoju i natury.
 To domek w Beskidzie Małym, położony wysoko, na 740 m n.p.m., z dala od zgiełku, ale blisko tego, co naprawdę ważne.
Odkryj miejsce, do którego chce się wracać.
`,
    image: czerwcowka,
  },

  {
    title: "Dla rodzin i bliskich sobie ludzi",
    content: `Pieśń Poranka to przestrzeń stworzona z myślą o wspólnym czasie.
 O rodzinnych wyjazdach, spokojnych pobytach seniorów i weekendach we dwoje.
Domek komfortowo gości 5–7 osób, oferując dwie sypialnie i jasny salon z dużymi oknami.
 Dzieci mają tu bezpieczne podwórko, plac zabaw i przestrzeń do swobodnej zabawy, a dorośli mogą zwolnić –
 bez pośpiechu, bez hałasu, bez imprez.
To dom, w którym łatwo być razem.
`,
    image: dlaRodzin,
  },
  {
    title: "Jasne wnętrza, ciepło i widok, który zostaje w pamięci",
    content: `Wnętrze łączy górski charakter z przestrzenią i światłem.
 Białe sufity, duże przeszklenia i widoki na Babią Górę, Pilsko, a przy dobrej widoczności także Tatry sprawiają, że domek jest jasny i przytulny o każdej porze roku.
O komfort cieplny dbają:
kominek na pellet,


ogrzewanie podłogowe,


ogrzewanie na podczerwień.


To miejsce, w którym szybko robi się ciepło –
 nie tylko fizycznie, ale i po prostu „po ludzku”.
`,
    image: wnetrze3,
  },
  {
    title: "Prywatna strefa relaksu z widokiem na góry",
    content: `Na zewnątrz czeka przestrzeń, która naturalnie zaprasza do odpoczynku.
 Taras z widokiem na góry, hamak, miejsce na ognisko i grill oraz całoroczne, prywatne jacuzzi, dostępne wyłącznie dla Gości domku.
Zanurzenie się w ciepłej wodzie, gdy przed Tobą rozciąga się górski horyzont, to chwile, które zostają w pamięci na długo.
 Tu wieczory są ciche, a czas płynie wolniej.
`,
    image: widoknagory,
  },
  {
    title: "Blisko natury, ale z wygodą na co dzień",
    content: `Domek położony jest tuż przy łąkach i szlakach turystycznych, w luźnej zabudowie, niemal na odludziu –
 ale bez poczucia izolacji.
W kilka minut dojedziesz do restauracji, a w krótkim czasie:
nad Jezioro Żywieckie,


na trasy rowerowe i szlaki piesze,


do ośrodków narciarskich i atrakcji regionu.


Pieśń Poranka to miejsce dla tych, którzy chcą odpocząć blisko natury,
 nie rezygnując z komfortu i dobrze przemyślanej przestrzeni.
`,    image: wakacje,
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
          isReversed && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={clsx(
              "text-2xl md:text-4xl mt-12 font-light mb-6",
              isReversed ? "md:text-left" : "md:text-right",
            )}
          >
            {title}
          </h2>

          <p
            className={clsx(
              "text-gray-600 leading-relaxed max-w-xl mb-8",
              isReversed ? "md:text-left" : "md:text-right",
            )}
          >
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
