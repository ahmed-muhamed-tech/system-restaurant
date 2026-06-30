import { useMutation } from "@tanstack/react-query";
import { addProductToFavorite } from "../../api";

export default function useAddProductToFavorite(menuItemId: string){

    return useMutation({
        mutationKey: ["favorite", menuItemId],
        mutationFn: () => addProductToFavorite(menuItemId)
    })

}