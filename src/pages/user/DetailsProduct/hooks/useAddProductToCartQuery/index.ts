import { useMutation } from "@tanstack/react-query";
import { addProductToCart } from "../../api";

export function useAddProductToCartQuery() {
  return useMutation({
    mutationFn: addProductToCart,
  });
}