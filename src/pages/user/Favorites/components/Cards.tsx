import { useState } from "react";
import useFavoritesProducts from "../hooks/useFavoritesProducts";
import useDeleteItemFromFavorite from "../hooks/useDeleteItemFromFavorite";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import CardLoading from "./CardLoading";
import CardProduct from "./CardProduct";
import Error from "@/components/ui/Error";
import type { MenuItem } from "../favorite.types";
import { useFavoriteStore } from "../store/favorite";

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
  const { dec } = useFavoriteStore();
  const handleDeleteItemFromFavorite = (id: string, name: string) => {
    setDeletingId(id);
    deleteItemFromFavorite(id, {
      onSuccess: () => {
        toast.success(`تم حذف ${name} بنجاح`);
        queryClient.invalidateQueries({
          queryKey: ["favorites"],
        });
        dec();
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

  if (isLoadingFavoritesProducts) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 4 }).map((_, index: number) => (
          <CardLoading key={index} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${favoritesProduct?.data?.length >= 1 && "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}`}
    >
      {!isLoadingFavoritesProducts && favoritesProduct.data.length <= 0 ? (
        <div className=" w-full h-43 text-2xl  flex justify-center items-center">
          <h3 className="border bg-white px-6 border-primary py-2 text-center rounded-xl text-primary">
            لا يوجد اي عناصر في المفضل
          </h3>
        </div>
      ) : (
        favoritesProduct?.data.map(({ menuItem }: { menuItem: MenuItem }) =>
          deletingId === menuItem.id && isLoadingDeleteItemFromFavorite ? (
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
        )
      )}
    </div>
  );
}
