import { api } from "@/services/api";

export const fetchContentCart = async () => {
  const response = await api.get("/cart");
  console.log(response.data)
  return response.data;
};

export const deleteCartItem = async (cartItemId: string) => {
  const response = await api.delete(`/cart/items/${cartItemId}`);
  return response.data;
};

export const updateCartItem = async ({
  cartItemId,
  quantity,
  note,
}: {
  cartItemId: string;
  quantity?: number;
  note?: string;
}) => {
  console.log(quantity);
  console.log(note)
  const body = {
    quantity,
    note
  };
  const response = await api.patch(`/cart/items/${cartItemId}`, body);
  return response.data;
};
