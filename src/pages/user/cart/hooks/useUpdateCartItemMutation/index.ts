import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "../../api";
import type { CartItem, CartResponse } from "../../models";

export default function useUpdateCartItemMutation(cartItemId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      quantity,
      note,
      id,
    }: {
      quantity?: number;
      note?: string | null;
      id?: string;
      unitPrice?: number;
    }) => updateCartItem({ cartItemId, quantity, note }),

    onMutate: async (updateCart) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const previosContentCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old: CartResponse) => {
        if (!old) return old;

        const items = old.data.items.map((item: CartItem) => {
          if (item.id !== updateCart.id) return item;

          const newQuantity = updateCart.quantity ?? item.quantity;

          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.unitPrice,
          };
        });

        const subtotal = items.reduce(
          (sum: number, item: CartItem) => sum + item.totalPrice,
          0,
        );

        return {
          ...old,
          data: {
            ...old.data,
            items,
            subtotal,
          },
        };
      });

      return { previosContentCart };
    },

    onError: (_, __, context) => {
      if (!context) return;

      queryClient.setQueryData(["cart"], context.previosContentCart);
    },

    onSettled: () => {
      if (queryClient.isMutating() === 1) {
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
      }
    },
  });
}
