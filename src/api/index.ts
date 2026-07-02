import { api } from "@/services/api";

export const fetchContentCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};