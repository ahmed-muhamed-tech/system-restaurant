import { useQuery } from "@tanstack/react-query";
import { fetchFavoritesProducts } from "../../api";

export default function useFavoritesProducts(page?: number){
    return useQuery({
        queryKey: ["favorites", page],
        queryFn: () => fetchFavoritesProducts()
    })
}