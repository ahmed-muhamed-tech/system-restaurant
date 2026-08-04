import { useEffect, useState } from "react";
import CardProductLoading from "@/pages/user/home/components/CardProductLoading";
import CardProduct from "@/pages/user/home/components/CardProduct";
import { useFetchMenu } from "@/pages/user/home/hooks/useMenuQuery";
import type { MenuItem, MenuQuery } from "@/pages/user/home/models";
import Error from "@/components/ui/Error";

export default function Products({ category }: { category: string }) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isPending: IsLoadingMenus,
    isError: isErrorMenus,
    data: menus,
  }: MenuQuery = useFetchMenu(currentPage, 12, category);

  const totalPages = menus?.meta?.totalPages || 0;

  useEffect(() => setCurrentPage(1), [category]);


  if (isErrorMenus) return <Error />;

  return (
    <>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {IsLoadingMenus &&
          Array.from({ length: 12 }).map((_, index: number) => (
            <CardProductLoading key={index} />
          ))}

        {!IsLoadingMenus &&
          menus &&
          menus?.data?.map(
            (
              {
                id,
                name,
                description,
                sizes,
                images,
                isAvailable,
                rating,
                hasDiscount,
                discountPercentage
              }: MenuItem,
              index: number,
            ) => (
              <CardProduct
              hasDiscount={hasDiscount}
              discountPercentage={discountPercentage}
                price={sizes[0]?.price}
                rating={rating}
                key={id}
                id={id}
                index={index}
                name={name}
                description={description}
                images={images}
                isAvailable={isAvailable}
              />
            ),
          )}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2 items-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`${index + 1 === currentPage && "text-white bg-primary"} border border-primary hover:text-white hover:bg-primary hover:scale-90 transition-all duration-300 text-black rounded-md text-lg py-2 min-w-12`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
