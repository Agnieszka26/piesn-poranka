import { ReviewItem } from "@/app/dashboard/types";
import { CheckCircle, Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import "dayjs/locale/pl";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);
dayjs.locale("pl");
function timeAgo(dateString: string) {
  return "dodano " + dayjs(dateString).fromNow();
}
const ReviewCard = (r: ReviewItem) => {
  return (
    <div key={r.id} className="min-w-[calc(100%/3)] px-3">
      <div className="bg-gray-50 rounded-2xl shadow-sm p-5 h-full grid flex-col text-left">
        {/* Header */}
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold mr-3">
            {r.author.slice(0, 1)}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800 text-sm">{r.author}</p>
            <p className="text-xs text-gray-500">{timeAgo(r.inserted_at)}</p>
          </div>
          <FcGoogle />
        </div>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(r.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
          <CheckCircle className="w-4 h-4 text-blue-500 ml-1" />
        </div>

        {/* Text */}
        <p className="text-sm text-gray-700 flex-1">
          {r.text.length > 120 ? `${r.text.slice(0, 120)}...` : r.text}
        </p>

        <button className="text-xs mt-2 text-gray-500 hover:underline">
          Czytaj więcej
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
