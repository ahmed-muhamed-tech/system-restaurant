import { toast } from "react-toastify";
import type { UseAddProductProps } from "../../models";
import { useAddProductToCartQuery } from "../useAddProductToCartQuery";
import useStore from "@/session/storeAuth";
import { useCartStore } from "@/pages/user/cart/store/cart";

export default function useAddProduct({
  currentProduct,
  sizeId,
  addonIds,
  quantity,
  note,
  reset,
}: UseAddProductProps) {
  const { inc } = useCartStore();
  const { mutate, isPending } = useAddProductToCartQuery(currentProduct.id);
  const { token } = useStore();
  const sendProductToCart = () => {
    if (!token) {
      toast.error("عليك تسجيل الدخول أولا");
      return;
    }

    if (!currentProduct.id) {
      toast.error("حدث خطأ ما");
      return;
    }

    mutate(
      {
        menuItemId: currentProduct.id,
        sizeId,
        addonIds,
        quantity,
        note,
      },
      {
        onSuccess: () => {
          reset();
          toast.success(`تم اضافه ${currentProduct.name} بنجاح`);
          inc();
        },
        onError: () => {
          toast.error("حدث خطأ برجاء المحاوله مره اخري");
        },
      },
    );
  };

  return { sendProductToCart, isPending };
}
