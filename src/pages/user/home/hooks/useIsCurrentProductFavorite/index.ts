import { useQuery } from "@tanstack/react-query";
import { fetchIsCurrentProductFavorite } from "../../api";

export default function useIsCurrentProductFavorite(menuItemId:string){
    return useQuery({
        queryKey: ["isFavorite", menuItemId],
        queryFn:()=> fetchIsCurrentProductFavorite(menuItemId)
    })
}