import { api } from "@/services/api";

export const fetchCategories = async () => {
  const response = await api.get("/categories");
  console.log(response.data);
  return response.data;
};

export const fetchMenu = async (
  page: number,
  limit: number,
  category: string | undefined,
) => {
  const response = await api.get(
    `/menu?page=${page}&limit=${limit}${category === "all" ? "" : `&category=${category}`}`,
  );
  return response.data;
};

export const addProductToFavorite = async (menuItemId: string) =>
  (await api.post(`/favorites/${menuItemId}`)).data;

export const fetchIsCurrentProductFavorite = async (menuItemId: string) =>
  (await api.get(`/favorites/${menuItemId}/status`)).data;
