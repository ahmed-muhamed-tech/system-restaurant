import { IoClose, IoFastFoodOutline } from "react-icons/io5";

type HeaderProps = {

  onClose: () => void;
};

export default function Header({  onClose }: HeaderProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-2xl">
                <IoFastFoodOutline className="text-2xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                إضافة منتج جديد
              </h2>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              أضف منتج جديد إلى القائمة ›
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <IoClose className="text-2xl" />
        </button>
      </div>

    
    </div>
  );
}
