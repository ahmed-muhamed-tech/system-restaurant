import  { useState } from "react";
import useFavoritesProducts from "../hooks/useFavoritesProducts";
import useDeleteItemFromFavorite from "../hooks/useDeleteItemFromFavorite";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import CardLoading from "./CardLoading";
import CardProduct from "./CardProduct";
import Error from "@/components/ui/Error";
import type { MenuItem } from "../favorite.types";


export default function Cards() {
  const {
    data: favoritesProduct,
    isPending: isLoadingFavoritesProducts,
    isError: isErrorFavoritesProducts,
  } = useFavoritesProducts(1);

  const {
    mutate: deleteItemFromFavorite,
    isPending: isLoadingDeleteItemFromFavorite,
  } = useDeleteItemFromFavorite();

  const [deletingId, setDeletingId] = useState("");
  const queryClient = useQueryClient();
  const handleDeleteItemFromFavorite = (id: string, name: string) => {
    setDeletingId(id);
    deleteItemFromFavorite(id, {
      onSuccess: () => {
        toast.success(`تم حذف ${name} بنجاح`);
        queryClient.invalidateQueries({
          queryKey: ["favorites"],
        });
        setDeletingId("");
      },
      onError: (error) => {
        console.log(error);
        toast.error("حدث خطأ ما");
        setDeletingId("");
      },
    });
  };

  if (isErrorFavoritesProducts) {
    return <Error />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoadingFavoritesProducts &&
        Array.from({ length: 4 }).map((_, index: number) => (
          <CardLoading key={index} />
        ))}

      {!isLoadingFavoritesProducts &&
        favoritesProduct?.data.map(({ menuItem }: { menuItem: MenuItem }) =>
          deletingId === menuItem.id ? (
            <CardLoading key={menuItem.id} />
          ) : (
            <CardProduct
              key={menuItem.id}
              urlImage={menuItem.images[0].url}
              name={menuItem.name}
              id={menuItem.id}
              description={menuItem.description}
              rating={menuItem.rating}
              handleDeleteItemFromFavorite={handleDeleteItemFromFavorite}
            />
          ),
        )}
    </div>
  );
}
