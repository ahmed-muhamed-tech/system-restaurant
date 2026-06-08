import { useQuery } from "@tanstack/react-query";
import { fetchAddonsForMenu, fetchCategories, fetchCurrentProduct, fetchMenu } from "./apiUser";

type Image = {
  id: string;
  menuItemId: string;
  url: string;
  publicId: string;
  order: number;
  createdAt: string;
};

type Data = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  images: Image[];
};

type Meta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type ResponseData = {
  data: Data[];
  meta: Meta;
};

type MenuQeury = {
  data: ResponseData | undefined;
  isError: boolean;
  isPending: boolean;
  error: any;
};

type Categories = [
  {
    id: string;
    name: string;
    slug: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  },
];

export const useFetchMenu = (page: number, limit: number, category: string) => {
  return useQuery<ResponseData>({
    queryKey: ["menu", category, page],
    queryFn: () => fetchMenu(page, limit, category),
    refetchOnWindowFocus: false,
  });
};

export const useFetchCategories = () => {
  return useQuery<Categories>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    refetchOnWindowFocus: false,
  });
};

export const useFetchCurrentProduct = (id:string | undefined) =>{
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchCurrentProduct(id),
  })
}

export const useFetchAddonsForMenu = (menuItemId: string | undefined) => {
  return useQuery({
    queryKey: ["addons", menuItemId],
    queryFn: () => fetchAddonsForMenu(menuItemId)
  })
}