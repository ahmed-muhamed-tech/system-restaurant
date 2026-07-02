import { useQuery } from "@tanstack/react-query";
import { fetchContentCart } from "@/api";

export  function useCartQuery() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: fetchContentCart
  })
}
