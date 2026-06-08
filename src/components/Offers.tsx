import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import v1 from "../assets/images/v1.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import v3 from "../assets/images/v3.jpeg";

const offers = [
  {
    title: "عرض البرجر المزدوج",
    subTitle: "2 برجر + بطاطس + مشروب بسعر مميز",
    image: v1,
  },
  {
    title: "عرض البيتزا العائلية",
    subTitle: "بيتزا كبيرة + بطاطس + 2 مشروب",
    image: v1,
  },
  {
    title: "عرض الفراخ المقرمشة",
    subTitle: "6 قطع فراخ + بطاطس + صوصات مجانية",
    image: v1,
  },
  {
    title: "عرض الشاورما",
    subTitle: "ساندوتش شاورما + بطاطس + مشروب",
    image: v1,
  },
];

export default function Offers() {
  return (
    <div className="flex gap-4 mt-6 lg:mt-12 items-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        className="mySwiper"
      >
        {offers.map(({ title, subTitle, image }) => (
          <SwiperSlide>
            <div className="bg-white pt-4 pb-12 xl:pb-4 px-6 rounded-2xl   flex flex-col-reverse text-center lg:text-start lg:flex-row justify-evenly items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl xl:text-5xl font-medium leading-9 lg:leading-12 xl:leading-18">
                  {title}
                  <span className="text-accent">{}</span>
                </h2>
                <h4 className="mt-2 lg:mt-3 xl:mt-4 text-muted text-lg xl:text-2xl">
                  {subTitle}
                </h4>
                <button className="mx-auto lg:mx-0 mt-6 rounded-md py-2 px-4 text-sm lg:text-lg text-white bg-black flex items-center gap-2">
                  <span>اطلب الان</span>

                  <MdKeyboardArrowLeft />
                </button>
              </div>

              <img
                src={image}
                alt="photo"
                className="w-33 md:w-44 lg:w-55 xl:w-66"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
