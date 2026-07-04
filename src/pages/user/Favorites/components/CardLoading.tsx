import { FaHeart, FaStar } from "react-icons/fa6";

export default function CardLoading() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white ">
      <div className="relative h-64 overflow-hidden">
        <div className="w-full bg-gray-200 h-full object-cover "></div>
        <button
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-gray-200 text-gray-300  flex items-center justify-center
  "
        >
          <FaHeart />
        </button>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center text-xl lg:text-2xl  font-medium">
          <h2 className="bg-gray-200 h-2 w-12"></h2>
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
            <FaStar className="text-gray-200" />
            <span className="h-2 w-6 bg-gray-200"></span>
          </div>
        </div>
        <p className="bg-gray-200 h-1 w-22 mb-1"></p>
        <p className="bg-gray-200 h-1 w-32 mb-1"></p>
        <p className="bg-gray-200 h-1 w-42"></p>
      </div>
    </div>
  );
}
