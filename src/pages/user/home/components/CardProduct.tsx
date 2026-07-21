import { FaStar } from "react-icons/fa6";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { IoIosHeart } from "react-icons/io";
import type { CardProductProps } from "@/pages/user/home/models";
import useAddProductToFavorite from "../hooks/useAddProductToFavorite";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useIsCurrentProductFavorite from "../hooks/useIsCurrentProductFavorite";

import { useQueryClient } from "@tanstack/react-query";
import { useFavoriteStore } from "../../Favorites/store/favorite";

export default function CardProduct({
  index,
  name,
  description,
  price,
  images,
  isAvailable,
  id,
  rating,
  hasDiscount,
  discountPercentage,
}: CardProductProps) {
  const { isPending: isLoadingAddToFavorite, mutate: addToFavorite } =
    useAddProductToFavorite(id);
  const {
    isPending: isLoadingFavorite,
    data: isFavoriteProduct,
    isError: isErrorFavorite,
  } = useIsCurrentProductFavorite(id);
  const isFavorite = isFavoriteProduct?.data?.isFavorite;

  const queryClient = useQueryClient();

  const { inc } = useFavoriteStore();
  const handleFavoriteProduct = () => {
    addToFavorite(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["isFavorite", id],
        });
        inc();
        toast.success(`تم اضافه ${name} بنجاح`);
      },
      onError: (error) => {
        toast.error("حدث خطأ جرب مره أخرى");
        console.log(error);
      },
    });
  };

  if (isErrorFavorite) return toast.error("فشل اضافه المنتج الي المفضله");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      className={`${!isAvailable && "border-2 border-red-500"} relative flex group flex-col-reverse justify-between items-center gap-2  overflow-hidden rounded-3xl bg-white `}
    >
      {!isAvailable && (
        <div className="absolute top-2 right-2 rounded-md bg-red-500 text-white py-2 px-4 z-40">
          غير متاح
        </div>
      )}
      <div className="pr-4 flex flex-col justify-between py-4 w-full px-8">
        <Link to={`product/${id}`}>
          <h3 className="text-xl lg:text-2xl font-medium">{name}</h3>
          <p className="mt-2 text-sm md:text-sm text-muted">{description}</p>
          <div className="mt-2 flex items-center gap-2 text-lg lg:text-xl">
            <FaStar className="text-primary" />
            <span className="text-muted">{rating}</span>
          </div>
        </Link>

        <div className="flex mt-6  justify-between items-center text-sm lg:text-xl">
          <div className="flex items-center gap-2 text-xl lg:text-3xl">
            {!isLoadingFavorite && (
              <button
                onClick={handleFavoriteProduct}
                disabled={isLoadingAddToFavorite}
                className={`text-gray-500 hover:scale-105  ${isLoadingAddToFavorite && "animate-pulse"} hover:text-red-500 ${isFavorite && "text-red-500"} hover:border-transparent transition-all duration-300 cursor-pointer`}
              >
                <IoIosHeart />
              </button>
            )}
          </div>
          <div className="flex gap-1 items-end">
            {hasDiscount ? (
              <>
                <span className="text-lg line-through text-primary">
                  {price}
                </span>
                <div className="text-muted text-xl">
                  {price - price * (discountPercentage / 100)} ج.م
                </div>
              </>
            ) : (
              <div className="text-muted text-xl">{price} ج.م</div>
            )}
          </div>
        </div>
      </div>

      <div className="h-55 lg:h-66 w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          pagination={true}
          className="mySwiper w-full h-full"
        >
          {images.map(({ id, url }) => (
            <SwiperSlide key={id} className="h-full w-full">
              <img
                src={url}
                alt="photo "
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
