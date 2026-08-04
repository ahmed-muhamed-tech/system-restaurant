import { MdDownloadDone } from "react-icons/md";

type SaveOrCancelProps = {
  isLoadingAddNewMenu: boolean;
  handleAddNewProduct: () => void;
  onClose: () => void;
};

export default function SaveOrCancel({
  isLoadingAddNewMenu,
  handleAddNewProduct,
  onClose,
}: SaveOrCancelProps) {
  return (
    <div className="pt-4 flex items-center justify-start gap-3">
      <button
        disabled={isLoadingAddNewMenu}
        onClick={handleAddNewProduct}
        className={`px-6 py-2.5 ${isLoadingAddNewMenu ? "bg-orange-200 " : "bg-orange-500 hover:bg-orange-600"} text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-orange-200 active:scale-95 flex items-center gap-2`}
      >
        <span>{isLoadingAddNewMenu ? "جاري الاضافه..." : "اضافه"}</span>
        <MdDownloadDone className="text-base" />
      </button>

      <button
        onClick={onClose}
        type="button"
        className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-sm rounded-xl transition-all active:scale-95"
      >
        إلغاء
      </button>
    </div>
  );
}
