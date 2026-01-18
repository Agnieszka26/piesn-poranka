import {
  MountainSnow,
  Flower2,
  CalendarSync,
  Sun,
  Bed,
  Footprints,
} from "lucide-react";
interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
}
const features: Feature[] = [
  { id: 1, icon: MountainSnow, title: "Cicha i spokojna okolica" },
  { id: 3, icon: Sun, title: "Piękne widoki z okna na góry" },
  { id: 2, icon: CalendarSync, title: "Całoroczny domek - kominek i klimatyzacja" },
  { id: 4, icon: Flower2, title: "Specjalna strefa relaksu: jacuzzi, taras, hamak, plac zabaw, ognisko/gril"  },
  { id: 5, icon: Bed, title: "Wysoki standard: pralka, zmywarka, ekspres do kawy i wiele innych" },
  { id: 6, icon: Footprints, title: "Bliskość szlaków turystycznych" },
];
const Features = () => {
  return (
     <div className="border-b border-gray-100 py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map(({ id, icon: Icon, title }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center text-gray-700"
            >
              <Icon className="md:w-12 md:h-12 mb-3 text-primary-green" />
              <p className="text-sm font-medium leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </div>

  )
}

export default Features