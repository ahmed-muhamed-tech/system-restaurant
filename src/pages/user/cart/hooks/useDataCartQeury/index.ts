import { useQuery } from "@tanstack/react-query";
import { fetchContentCart } from "../../api";

export  function useDataCartQeury() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: fetchContentCart
  })
}
