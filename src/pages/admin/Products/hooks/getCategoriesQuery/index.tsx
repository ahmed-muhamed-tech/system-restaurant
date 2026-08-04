import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api";

export default function getCategoriesQuery() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
