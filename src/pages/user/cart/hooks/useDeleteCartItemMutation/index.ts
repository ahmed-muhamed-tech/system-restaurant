import { useMutation } from "@tanstack/react-query";
import { deleteCartItem } from "../../api";

export default function useDeleteCartItemMutation(cartItemId: string) {
  return useMutation({
    mutationKey: ["item", cartItemId],
    mutationFn: () => deleteCartItem(cartItemId),
  
  });
}
