import ButtonsCountProducts from "@/components/ui/ButtonsCountProducts";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import useDeleteItemQuery from "../hooks/useDeleteItemQuery";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import useUpdateCartQeury from "../hooks/useUpdateCartQeury";
import Confirm from "@/components/ui/Confirm";
type Addons = {
  price: number;
  name: string;
};
type CardProductProps = {
  image: string;
  title: string;
  addons?: Addons[];
  unitPrice?: number;
  totalPrice: number;
  quantity: number;
  id: string;
};

export default function CardProduct({
  id,
  image,
  title,
  addons,
  unitPrice,
  totalPrice,
  quantity,
}: CardProductProps) {
  const [count, setCount] = useState(quantity);
  const queryClient = useQueryClient();
  const [openPopup, setOpenPopup] = useState(false);
  console.log(title)

  const { mutate, isPending } = useDeleteItemQuery(id);
  const { mutate: updateCart, isPending: isLoadingCart } = useUpdateCartQeury(
    id,
    count,
  );

  function handleDeleteItem() {
    mutate(undefined, {
      onSuccess: () => {
        toast.success(`تم حذف ${title} بنجاح`);
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
        setOpenPopup(false);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  useEffect(() => {
    updateCart(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }, [count]);

  if (openPopup)
    return (
      <Confirm
        title="حذف المنتج"
        message="هل أنت متأكد من حذف هذا المنتج من السلة؟"
        onConfirm={handleDeleteItem}
        onCancel={() => setOpenPopup(false)}
      />
    );



  return (
  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
    {/* Top */}
    <div className="flex gap-4">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
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
          <span className="text-sm text-gray-400">
            سعر الوحدة:
          </span>

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
        <h4 className="text-gray-400 text-sm mb-1">
          الإجمالي
        </h4>

        <p className="text-2xl font-bold text-primary">
          {totalPrice} ج.م
        </p>
      </div>

      <ButtonsCountProducts count={count} setCount={setCount} />

      <button
        onClick={() => setOpenPopup(true)}
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
  </div>
);
}
