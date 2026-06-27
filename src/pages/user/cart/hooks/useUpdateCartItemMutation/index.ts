import { useMutation } from "@tanstack/react-query";
import { updateCartItem } from "../../api";

export default function useUpdateCartItemMutation(cartItemId: string) {
  return useMutation({
    mutationKey: ["cartInfo", cartItemId],
    mutationFn: ({ quantity, note }: { quantity?: number; note?: string }) =>
      updateCartItem({ cartItemId, quantity, note }),
    
  });
}
