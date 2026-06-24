import { api } from "@/services/api";

export const fetchContentCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

export const deleteCardItem = async (cartItemId: string) => {
  const response = await api.delete(`/cart/items/${cartItemId}`);
  return response.data;
};

export const updateCartItem = async (cartItemId: string, quantity: number) => {
  const body = {
    quantity,
  };
  const response = await api.patch(`/cart/items/${cartItemId}`, body);
  return response.data;
};
