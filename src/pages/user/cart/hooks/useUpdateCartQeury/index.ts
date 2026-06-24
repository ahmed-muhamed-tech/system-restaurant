import { useMutation } from "@tanstack/react-query";
import { updateCartItem } from "../../api";

export default function useUpdateCartQeury(
  cartItemId: string,
  quantity: number,
) {
  return useMutation({
    mutationKey: ["cartInfo", cartItemId],
    mutationFn: () => updateCartItem(cartItemId, quantity),
  });
}
