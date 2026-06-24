import { useMutation } from "@tanstack/react-query";
import { deleteCardItem } from "../../api";

export default function useDeleteItemQuery(cartItemId: string) {
  return useMutation({
    mutationKey: ["item", cartItemId],
    mutationFn: () => deleteCardItem(cartItemId),
  
  });
}
