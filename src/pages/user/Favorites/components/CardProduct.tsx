import { FaHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

type CardProps = {
  id: string;
  urlImage: string;
  handleDeleteItemFromFavorite: (id: string, name: string) => void;
  name: string;
  rating: number;
  description: string;
};

export default function CardProduct({
  urlImage,
  handleDeleteItemFromFavorite,
  name,
  rating,
  description,
  id,
}: CardProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={urlImage}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <button
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 text-red-500 backdrop-blur flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition
  "
          onClick={() => {
            handleDeleteItemFromFavorite(id, name);
          }}
        >
          <FaHeart />
        </button>
      </div>

      <Link to={`/product/${id}`}>
        <div className="p-5">
          <div className="flex justify-between items-center text-xl lg:text-2xl  font-medium">
            <h2 className="font-bold text-gray-800">{name}</h2>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>
          <p className="text-gray-500 leading-7 line-clamp-2">{description}</p>
        </div>
      </Link>
    </div>
  );
}
