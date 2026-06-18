
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/pages/user/home/api";
import type { CategoryResponse } from "@/pages/user/home/models";

export const useFetchCategories = () => {
  return useQuery<CategoryResponse[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    refetchOnWindowFocus: false,
  });
};