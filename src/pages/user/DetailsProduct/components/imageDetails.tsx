import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import type { CurrentProduct } from "../models";

export default function ImageDetails({
  currentProduct,
}: {
  currentProduct: CurrentProduct;
}) {
  const { images } = currentProduct;
  
  return (
    <>
      {images && images.length === 1 ? (
        <div className="w-10 h-10 xl:h-full xl:w-full">
          <img
            src={images[0].url}
            alt="photo "
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          pagination={true}
          className="mySwiper h-full w-full"
        >
          {images?.map(({ id, url }: { id: string; url: string }) => (
            <SwiperSlide key={id} className="w-10 h-10 xl:h-full xl:w-full">
              <img
                src={url}
                alt="photo "
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
