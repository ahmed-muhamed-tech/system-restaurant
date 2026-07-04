import { useMutation } from "@tanstack/react-query"
import { deleteItemFromFavorite } from "../../api"

export default function useDeleteItemFromFavorite() {
    return useMutation({
        mutationKey: ["item"],
        mutationFn: (menuItemId:string) => deleteItemFromFavorite(menuItemId)
    })
}