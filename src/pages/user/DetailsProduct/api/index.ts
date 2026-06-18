import { api } from "@/services/api";

export const fetchCurrentProduct = async (id:string | undefined) => {
  const response = await api.get(`/menu/${id}`)
  return response.data;
}
