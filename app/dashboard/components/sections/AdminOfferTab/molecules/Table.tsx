import { OfferItem } from "../../../../types";
import Image from "next/image";

type Props = {
  initialData: OfferItem[];
  onEditOffer: (offer: OfferItem) => void;
  deleteOffer: (
    id: number,
    paths: string | null,
    main_image: string,
  ) => Promise<void>;
};

const OffersTable: React.FC<Props> = ({
  initialData,
  deleteOffer,
  onEditOffer,
}) => {
  return (
    <div className="overflow-x-auto pt-6">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Utworzono</th>
            <th className="px-4 py-2 border">Tytuł</th>
            <th className="px-4 py-2 border">Podtytuł</th>
            <th className="px-4 py-2 border">Główny obrazek</th>
            <th className="px-4 py-2 border">Opis</th>
            <th className="px-4 py-2 border"></th>
          </tr>
        </thead>
        <tbody>
          {initialData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">
                {new Date(item.created_at).toLocaleDateString("pl")}
              </td>
              <td className="px-4 py-2 border">{item.title}</td>
              <td className="px-4 py-2 border">{item.subtitle}</td>
              <td className="px-4 py-2 border">
                {<Image src={item.main_image} alt="Main Image" width={120} height={120} />}
              </td>
              <td className="px-4 py-2 border">
                {<div dangerouslySetInnerHTML={{ __html: item.description }} />}
              </td>

              <td className="px-4 py-2 border space-x-2">
                <>
                  <button
                    onClick={() => onEditOffer(item)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edytuj
                  </button>
                  <button
                    onClick={() =>
                      deleteOffer(item.id, item.images, item.main_image)
                    }
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Usuń
                  </button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OffersTable;
