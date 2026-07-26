import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white px-12 py-4">
      {/* logo */}
      <div className="text-2xl text-white bg-primary py-2 px-4 rounded-2xl">
        <h3 >بازوكا</h3>
      </div>

      {/* Search */}

      <div className="bg-gray-100 flex items-center text-sm rounded-xl px-4">
        <IoIosSearch />
        <input
          className="py-2 px-4 outline-none border-none flex-1"
          type="text"
          placeholder="ابحث في الطلبات والمنتجات"
        />
      </div>

      {/* Account & notification */}
      <div className="flex items-center gap-5">
        <div className="relative text-2xl rounded-full w-10 h-10 bg-gray-200 flex justify-center items-center text-gray-800">
            <div className="w-2 h-2 rounded-full bg-red-600 absolute top-2 left-3">
               
            </div>
          <IoMdNotificationsOutline />
        </div>

        <div className="flex items-center gap-1">
          <FaUserCircle className="text-4xl text-primary " />

          <div>
            <h4 className="text-sm">محمد</h4>
            <h5 className="text-xs">مدير الفرع الرئيسي</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
