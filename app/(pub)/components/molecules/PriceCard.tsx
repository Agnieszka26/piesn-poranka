import Image from "next/image";
import { PriceCardProps } from "../../typesProps";


export default function PriceCard({
  title,
  tag,
  image,
  date,
  features,
  attractions,
  oldPrice,
  price,
  priceInfo,
  availability,
}: PriceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />

        {tag && (
          <div className="absolute top-3 left-3 bg-green-600 text-white text-sm px-3 py-1 rounded-lg shadow">
            {tag}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <h3 className="">{date}</h3>

        <ul className="text-sm text-gray-700 space-y-1 mt-4">
          {features.map((f, idx) => (
            <li key={idx} className="flex items-left gap-2">
              <span>{f.icon}</span> <p className="text-left"> {f.text}</p>
            </li>
          ))}
        </ul>

        {attractions ? (
          <ul className="text-sm text-gray-700 space-y-1 mt-4 border-t border-gray-300 pt-4 grow">
            {attractions.map((f, idx) => (
              <li key={idx} className="flex items-left gap-2">
                <span>{f.icon}</span> <p className="text-left"> {f.text}</p>
              </li>
            ))}{" "}
          </ul>
        ) : null}

        <div className="mt-4 border-t border-gray-300 pt-4">
          {oldPrice && (
            <p className="text-sm line-through text-gray-400">{oldPrice} zł</p>
          )}

          {price && <p className="text-2xl font-bold">{price} zł</p>}

          <p className="text-xs text-gray-500">{priceInfo}</p>
          <p className="text-xs text-gray-600 mt-2">{availability}</p>
        </div>
      </div>
    </div>
  );
}
