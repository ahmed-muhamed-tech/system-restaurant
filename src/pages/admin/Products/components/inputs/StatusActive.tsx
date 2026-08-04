import type { Dispatch, SetStateAction } from "react";
import type { ProductForm } from "../../types";

export default function StatusActive({
  isActive,
  setFormData,
}: {
  isActive: boolean;
  setFormData: Dispatch<SetStateAction<ProductForm>>;
}) {
  return (
    <div className="pt-2">
      <label className="block text-xs font-semibold text-gray-700 mb-2 text-right">
        الحالة
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              isActive: !prev.isActive,
            }))
          }
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
            isActive ? "bg-orange-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              isActive ? "-translate-x-6" : "translate-x-0"
            }`}
          />
        </button>

        <div className="text-right">
          <span className="text-xs font-bold text-gray-800 block">نشط</span>
          <span className="text-[11px] text-gray-400">
            سيظهر المنتج في القائمة
          </span>
        </div>
      </div>
    </div>
  );
}
