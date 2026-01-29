// components/ArticleCard.jsx
import { OfferItem } from "@/app/dashboard/types";
import Image from "next/image";
import { imageStylesDescription } from "../utils";

const ArticleCard = ({ created_at, title, subtitle, description,main_image }: OfferItem) => {
  return (
    <div className="flex space-x-4 items-start p-4 bg-white rounded-lg">
      {/* Obrazek */}
      <div className="shrink-0 w-24 h-24 relative">
        <Image
          src={main_image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Tekst */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
          <span className="text-sm text-gray-500">{new Date(created_at).toLocaleDateString("pl")}</span>
        </div>
        <p className="text-sm">
        {subtitle}
        </p>
      
            <div 
            className={imageStylesDescription}
            dangerouslySetInnerHTML={{ __html: description }} />

      </div>
    </div>
  );
};

export default ArticleCard;
