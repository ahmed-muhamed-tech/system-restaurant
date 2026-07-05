import { IoLogOutOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function MoreOptions() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 py-3 px-3 flex flex-col gap-1">
      <div className="p-3 flex items-center justify-between text-gray-700 rounded-2xl hover:bg-gray-50 transition-all duration-200 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="bg-red-50 text-red-500 w-10 h-10 rounded-xl flex items-center justify-center text-lg">
            <IoLogOutOutline />
          </div>
          <h4 className="font-medium">تسجيل الخروج</h4>
        </div>
        <MdKeyboardArrowLeft className="text-gray-300" />
      </div>
    </div>
  );
}
