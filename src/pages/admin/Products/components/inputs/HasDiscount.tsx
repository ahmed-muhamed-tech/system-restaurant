import type { Dispatch, SetStateAction } from "react";
import type { ProductForm } from "../../types";

export default function HasDiscount({
  hasDiscount,
  setFormData,
}: {
  hasDiscount: boolean;
  setFormData: Dispatch<SetStateAction<ProductForm>>;
}) {
  return (
   <div className="flex flex-col gap-1 mb-3 mt-2">
    <span className="text-xs">هل هناك خصم</span>
     <button
      type="button"
      onClick={() =>
        setFormData((prev) => ({
          ...prev,
          hasDiscount: !prev.hasDiscount,
        }))
      }
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
        hasDiscount ? "bg-orange-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
          hasDiscount ? "-translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
   </div>
  );
}
