import { api } from "@/services/api";

export async function fetchFavoritesProducts(){
    const response = await api.get(`/favorites`)
    console.log(response.data)
    return response.data
}

export async function deleteItemFromFavorite(menuItemId: string) {
    const response = await api.delete(`/favorites/${menuItemId}`)

    return response.data;
    
}