import { NewsItem } from "../../../../types";
import ArticleCard from "./NewsCard";

type Props = {
  initialData: NewsItem[];
  onEditNews: (news: NewsItem) => void;
  deleteNews: (
    id: number,
    paths: string | string[] | null,
    main_image: string,
  ) => Promise<void>;
};

const NewsTable: React.FC<Props> = ({
  initialData,
  deleteNews,
  onEditNews,
}) => {
  return (
    <>
      {initialData.map((item) => (
        <div key={item.id} className="shadow-md rounded-lg my-4">
          <ArticleCard {...item} />
          <div className="flex justify-center gap-6 mt-4 pb-4">

          <button
            onClick={() => onEditNews(item)}
            className="bg-blue-500 text-white px-6 py-2 text-lg rounded-lg hover:bg-blue-600 transition"
  
            >
            Edytuj
          </button>
          <button
            onClick={() => deleteNews(item.id, item.images, item.main_image)}
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

export default NewsTable;
