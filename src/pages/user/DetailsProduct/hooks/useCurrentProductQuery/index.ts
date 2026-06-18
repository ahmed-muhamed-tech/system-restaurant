import { useQuery } from "@tanstack/react-query"
import { fetchCurrentProduct } from "@/pages/user/DetailsProduct/api"

export const useFetchCurrentProduct = (id:string | undefined) =>{
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchCurrentProduct(id),
  })
}