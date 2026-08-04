import { api } from "@/services/api";

type AddNewMenuPrametar = {
  name: string;
  description: string;
  categoryId: string;
  isAvailable: boolean;
  hasDiscount: boolean;
  discountPercentage: number;
  rating: number;
  images: File[];
};

export const addNewMenu = async (formData: FormData) => {
  const response = await api.post("/menu", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data);
  return response.data;
};

export const getMenu = async (currentPage: number) => {
  const response = await api.get("/menu", {
    params: {
      page: currentPage,
    },
  });
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const deleteCurrentMenu = async (id: string) => {
  const response = await api.delete(`/menu/${id}`);
  return response.data;
};
