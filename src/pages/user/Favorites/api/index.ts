import { api } from "@/services/api";

export async function fetchFavoritesProducts(){
    const response = await api.get(`/favorites`)
    return response.data
}

export async function deleteItemFromFavorite(menuItemId: string) {
    const response = await api.delete(`/favorites/${menuItemId}`)

    return response.data;
    
}