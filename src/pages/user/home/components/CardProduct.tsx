import {  FaStar } from "react-icons/fa6";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { IoIosHeart } from "react-icons/io";
import type { CardProductProps } from "@/pages/user/home/models";

export default function CardProduct({
  index,
  name,
  description,
  price,
  images,
  isAvailable,
}: CardProductProps) {

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
        <div>
          <h3 className="text-xl lg:text-2xl font-medium">{name}</h3>
          <p className="mt-2 text-sm md:text-sm text-muted">{description}</p>
          <div className="mt-2 flex items-center gap-2 text-lg lg:text-xl">
            <FaStar className="text-primary" />
            <span className="text-muted">4.7</span>
          </div>
        </div>

        <div className="flex mt-6  justify-between items-center text-sm lg:text-xl">
          <div className="flex items-center gap-2 text-xl lg:text-3xl">
            <button className="w-8 h-8  flex justify-center items-center rounded-md lg:rounded-2xl bg-primary text-white hover:rotate-180 transition-all duration-300">
            +
          </button>

          <IoIosHeart className="text-gray-500 hover:scale-105  hover:text-red-500 hover:border-transparent transition-all duration-300 cursor-pointer " />
          </div>
          <div className="flex gap-1 items-end">
            <span className="text-lg line-through text-primary">300</span>
            <div className="text-muted text-xl">{price} ج.م</div>
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
