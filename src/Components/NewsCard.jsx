import { FaEye, FaStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, rating, total_view, details } = news;

  const formattedDate = format(
    new Date(news.author.published_date),
    "yyyy-MM-dd"
  );

  return (
    <div className="bg-white rounded-xl shadow-md border p-4 mb-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600 text-xl">
          <FiBookmark className="cursor-pointer"/>
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt="news thumbnail"
        className="w-full rounded-lg"
      />

      {/* Details */}
      <p className="text-gray-700">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...
            <span className="text-blue-600 font-medium cursor-pointer ml-1">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar /> <span className="text-gray-800">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
