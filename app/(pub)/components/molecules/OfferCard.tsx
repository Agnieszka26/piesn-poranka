import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OfferCard({ offer }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
      
      {/* TOP IMAGE */}
      <div className="relative w-full h-48">
        <Image 
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover"
        />

        {offer.tag && (
          <div className="absolute top-3 left-3 bg-green-600 text-white text-sm px-3 py-1 rounded-lg shadow">
            {offer.tag}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        <h3 className="text-lg font-semibold mb-3">
          {offer.title}
        </h3>

        {/* Icons / features */}
        <ul className="text-sm text-gray-700 space-y-1 mb-4">
          {/*eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {offer.features.map((f: { icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, idx: Key | null | undefined) => (
            <li key={idx} className="flex items-center gap-2">
              <span>{f.icon}</span> {f.text}
            </li>
          ))}
        </ul>

        {/* PRICE SECTION */}
        <div className="mt-auto border-t pt-4">
          {offer.oldPrice && (
            <p className="text-sm line-through text-gray-400">
              {offer.oldPrice} zł
            </p>
          )}

          <p className="text-2xl font-bold">
            {offer.price} zł
          </p>

          <p className="text-xs text-gray-500">
            {offer.priceInfo}
          </p>

          <p className="text-xs text-gray-600 mt-2">
            {offer.availability}
          </p>
        </div>
      </div>
    </div>
  );
}
