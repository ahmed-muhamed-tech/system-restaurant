import { useMutation } from "@tanstack/react-query";
import { deleteCartItem } from "../../api";

export default function useDeleteItemQuery(cartItemId: string) {
  return useMutation({
    mutationKey: ["item", cartItemId],
    mutationFn: () => deleteCartItem(cartItemId),
  
  });
}
