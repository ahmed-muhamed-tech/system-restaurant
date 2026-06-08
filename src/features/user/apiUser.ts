import { api } from "../../services/api";

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

export const fetchCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const fetchCurrentProduct = async (id:string | undefined) => {
  const response = await api.get(`/menu/${id}`)
  return response.data;
}

export const fetchAddonsForMenu = async (menuItemId: string | undefined) => {
  const response = await api.get(`/addons/menu-item/${menuItemId}`)
  return response.data;
}