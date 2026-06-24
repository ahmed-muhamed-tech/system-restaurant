import { api } from "@/services/api";
import type { ProductCart } from "../models";

export const fetchCurrentProduct = async (id: string | undefined) => {
  const response = await api.get(`/menu/${id}`);
  return response.data;
};



export const addProductToCart = async ({
  menuItemId,
  sizeId,
  addonIds,
  quantity,
  note,
}: ProductCart) => {
  const body = {
    menuItemId,
    sizeId,
    quantity: quantity || 1,
    ...(addonIds.length > 0 && { addonIds }),
    ...(note.trim() && { note }),
  };

  const response = await api.post("/cart/items", body);

  return response.data;
};