import {
  IoIosSearch,
  IoMdMenu,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar({
  setCloseSidebar,
  closeSidebar,
}: {
  setCloseSidebar: (value: boolean) => void;
  closeSidebar: boolean;
}) {
  return (
    <div className="flex justify-between items-center bg-white px-12 py-4">
      {/* logo */}
      <div className="flex gap-4 items-center ">
        <IoMdMenu
          className="text-4xl cursor-pointer hidden lg:block"
          onClick={() => setCloseSidebar(!closeSidebar)}
        />
        <div className="text-2xl text-white bg-primary py-2 px-4 rounded-2xl">
          <h3>بازوكا</h3>
        </div>
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
          <div className="w-2 h-2 rounded-full bg-red-600 absolute top-2 left-3"></div>
          <IoMdNotificationsOutline />
        </div>

        <div className="flex items-center gap-1 text-4xl">
          <div>
            <FaUserCircle className=" text-primary " />
          </div>

          <h4 className="text-2xl">محمد</h4>
        </div>
      </div>
    </div>
  );
}
