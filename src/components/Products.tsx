import { useEffect, useState } from "react";
import { useFetchMenu } from "../features/user/hookUser";
import CardProductLoading from "./CardProductLoading";
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";
import type { Data, MenuQeury } from "../utils/types";

export default function Products({ category }: { category: string }) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isPending: IsLoadingMenus,
    isError: isErrorMenus,
    data: menus,
  }: MenuQeury = useFetchMenu(currentPage, 12, category);

  const totalPages = menus?.meta?.totalPages || 0;

  useEffect(() => setCurrentPage(1), [category]);

  if (isErrorMenus) {
    return (
      <div className="h-120 mt-8 bg-white text-2xl text-primary flex justify-center items-center">
        <h3 className="bg-primary/20 py-4 px-6 rounded-2xl">
          {" "}
          حدث خطأ غير متوقع{" "}
        </h3>
      </div>
    );
  }

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
              { id, name, description, price, images, isAvailable }: Data,
              index: number,
            ) => (
              <Link key={id} to={`product/${id}`}>
                <CardProduct
                  index={index}
                  name={name}
                  description={description}
                  price={price}
                  images={images}
                  isAvailable={isAvailable}
                />
              </Link>
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
