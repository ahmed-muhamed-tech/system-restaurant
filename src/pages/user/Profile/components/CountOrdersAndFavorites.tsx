import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { useFavoriteStore } from "../../Favorites/store/favorite";

export default function CountOrdersAndFavorites() {

  
  const {count: countItemsInFavorite} = useFavoriteStore()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-3xl flex items-center gap-4 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="bg-blue-100 rounded-2xl text-blue-600 w-14 h-14 shrink-0 flex justify-center items-center text-2xl">
            <LuShoppingCart />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">43</h3>
            <h3 className="text-gray-400 text-sm">اجمالي الطلبات</h3>
          </div>
        </div>

        <div className="p-5 rounded-3xl flex items-center gap-4 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="bg-red-100 rounded-2xl text-red-500 w-14 h-14 shrink-0 flex justify-center items-center text-2xl">
            <MdFavoriteBorder />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{countItemsInFavorite}</h3>
            <h3 className="text-gray-400 text-sm">المفضله</h3>
          </div>
        </div>
      </div>
  )
}
