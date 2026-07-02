import { api } from "@/services/api";

export const fetchCategories = async () => {
  const response = await api.get("/categories");
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
