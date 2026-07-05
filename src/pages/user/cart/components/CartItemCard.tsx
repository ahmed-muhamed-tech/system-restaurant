import ButtonsCountProducts from "@/components/ui/ButtonsCountProducts";
import { MdDeleteOutline } from "react-icons/md";
import Confirm from "@/components/ui/Confirm";
import type { CardProductProps } from "../models";
import useCartItemControls from "../hooks/useCartItemControls";


export default function CartItemCard({
  id,
  image,
  title,
  addons,
  unitPrice,
  totalPrice,
  quantity,
  note,
}: CardProductProps) {
  const {
    handleDeleteItem,
    decrease,
    increase,
    isDeleteConfirmOpen,
    setIsDeleteConfirmOpen,
    count,
    itemTotal,
    isDeleting,
    setMessage,
    isEdit,
    message,
    setIsEdit,
    handleEditNote,
  } = useCartItemControls({ quantity, id, totalPrice, title, unitPrice, note });

  if (isDeleteConfirmOpen)
    return (
      <Confirm
        isPending={isDeleting}
        title="حذف المنتج"
        message="هل أنت متأكد من حذف هذا المنتج من السلة؟"
        onConfirm={handleDeleteItem}
        onCancel={() => setIsDeleteConfirmOpen(false)}
      />
    );

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
      {/* Top */}
      <div className="flex gap-4">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
              {title}
            </h3>

            <div className="mt-2 flex flex-wrap gap-2">
              {addons?.map((addon) => (
                <span
                  key={addon.name}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {addon.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-400">سعر الوحدة:</span>

            <span className="font-semibold text-primary text-lg">
              {unitPrice} ج.م
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-100"></div>

      {/* Bottom */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div>
          <h4 className="text-gray-400 text-sm mb-1">الإجمالي</h4>

          <p className="text-2xl font-bold text-primary">{itemTotal} ج.م</p>
        </div>

        <ButtonsCountProducts
          increase={increase}
          decrease={decrease}
          count={count}
        />

        <button
          onClick={() => setIsDeleteConfirmOpen(true)}
          className="
          w-12 h-12
          rounded-2xl
          bg-red-50
          text-red-500
          text-2xl
          flex justify-center items-center
          hover:bg-red-500
          hover:text-white
          transition-all
        "
        >
          <MdDeleteOutline />
        </button>
      </div>

      <div className="mt-5">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!isEdit}
          rows={4}
          placeholder="اكتب رسالتك هنا..."
          className="
    w-full
    px-4 py-3
    text-sm lg:text-lg
    text-gray-800
    bg-white
    rounded-2xl
    border border-gray-200
    resize-none
    outline-none
    transition-all duration-300
    focus:border-primary
    focus:ring-4 focus:ring-primary/10
    hover:border-primary
    disabled:bg-gray-100
    disabled:text-gray-500
    disabled:cursor-not-allowed
  "
        />
        <div className="flex mt-3 items-center gap-2">
          {isEdit ? (
            <button
              onClick={handleEditNote}
              className="py-1 px-2 lg:py-2 lg:px-4 rounded-md text-lg lg:text-xl bg-green-500 text-white flex-1 hover:scale-98 transition-all duration-200"
            >
              تم
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="py-1 px-2 lg:py-2 lg:px-4 rounded-md text-lg lg:text-xl bg-primary text-white flex-1 hover:scale-98 transition-all duration-200"
            >
              تعديل
            </button>
          )}

          <button className="py-1 px-2 lg:py-2 lg:px-4 rounded-md text-lg lg:text-xl bg-red-500 text-white flex-1 hover:scale-98 transition-all duration-200">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}
