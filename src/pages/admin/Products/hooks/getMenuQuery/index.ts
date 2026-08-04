import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../api";

export default function getMenuQuery(currentPage: number) {
  return useQuery({
    queryKey: ["menu", currentPage],
    queryFn: () =>  getMenu(currentPage),
  });
}
