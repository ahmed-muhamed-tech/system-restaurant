
import { useQuery } from "@tanstack/react-query";
import { fetchMenu } from "@/pages/user/home/api";
import type { MenuResponse } from "@/pages/user/home/models";

export const useFetchMenu = (page: number, limit: number, category: string) => {
  return useQuery<MenuResponse>({
    queryKey: ["menu", category, page],
    queryFn: () => fetchMenu(page, limit, category),
    refetchOnWindowFocus: false,
  });
};
