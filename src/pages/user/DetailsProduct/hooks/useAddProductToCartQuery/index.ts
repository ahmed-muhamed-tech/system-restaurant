import { useMutation } from "@tanstack/react-query";
import { addProductToCart } from "../../api";

export function useAddProductToCartQuery(menuItemId: string) {
  return useMutation({
    mutationKey: ["product", menuItemId],
    mutationFn: addProductToCart,
  });
}