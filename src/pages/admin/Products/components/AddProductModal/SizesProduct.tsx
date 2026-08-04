import { LuSave } from "react-icons/lu";
type SizesProductProps = {
  onClose: () => void;
  saveProduct: () => void;
};

export default function SizesProduct({
  saveProduct,
  onClose,
}: SizesProductProps) {
  return (
    <div>
      {/* Footer Buttons */}
      <div className="pt-4 flex items-center justify-start gap-3">
        <button
          onClick={saveProduct}
          type="submit"
          className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-orange-200 active:scale-95 flex items-center gap-2"
        >
          <span>حفظ المنتج</span>
          <LuSave className="text-base" />
        </button>

        <button
          onClick={onClose}
          type="button"
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-sm rounded-xl transition-all active:scale-95"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
}
