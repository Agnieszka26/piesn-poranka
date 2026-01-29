import { OfferItem } from "../../../../types";
import ArticleCard from "./ArticleCard";

type Props = {
  initialData: OfferItem[];
  onEditOffer: (offer: OfferItem) => void;
  deleteOffer: (
    id: number,
    paths: string | string[] | null,
    main_image: string,
  ) => Promise<void>;
};

const OffersTable: React.FC<Props> = ({
  initialData,
  deleteOffer,
  onEditOffer,
}) => {
  return (
    <>
      {initialData.map((item) => (
        <div key={item.id} className="shadow-md rounded-lg my-4">
          <ArticleCard {...item} />
          <div className="flex justify-center gap-6 mt-4 pb-4">

          <button
            onClick={() => onEditOffer(item)}
            className="bg-blue-500 text-white px-6 py-2 text-lg rounded-lg hover:bg-blue-600 transition"
  
            >
            Edytuj
          </button>
          <button
            onClick={() => deleteOffer(item.id, item.images, item.main_image)}
            className="bg-red-500 text-white px-6 py-2 text-lg rounded-lg hover:bg-red-600 transition"
            >
            Usuń
          </button>
            </div>
        </div>
      ))}
    </>
  );
};

export default OffersTable;
