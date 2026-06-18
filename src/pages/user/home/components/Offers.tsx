import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import v1 from "@/assets/images/v1.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
const offers = [
  {
    id: 1,
    title: "عرض البرجر المزدوج",
    subTitle: "2 برجر لحم مشوي + بطاطس كبيرة + 2 مشروب غازي",
    description:
      "عرض مناسب لشخصين مع توفير كبير على الوجبة الكاملة",
    oldPrice: 420,
    newPrice: 299,
    discount: "29%",
    badge: "الأكثر طلباً",
    validUntil: "ينتهي خلال 3 أيام",
    rating: 4.8,
    image: v1,
  },
  {
    id: 2,
    title: "عرض البيتزا العائلية",
    subTitle: "بيتزا كبيرة 4 أنواع + بطاطس + 2 مشروب",
    description:
      "مثالي للتجمعات العائلية مع تشكيلة متنوعة من النكهات",
    oldPrice: 550,
    newPrice: 399,
    discount: "27%",
    badge: "عرض العائلة",
    validUntil: "ينتهي الليلة",
    rating: 4.9,
    image: v1,
  },
  {
    id: 3,
    title: "عرض الفراخ المقرمشة",
    subTitle: "6 قطع فراخ + بطاطس + 3 صوصات مجانية",
    description:
      "قطع دجاج مقرمشة طازجة مع تشكيلة من الصوصات المميزة",
    oldPrice: 360,
    newPrice: 259,
    discount: "28%",
    badge: "خصم كبير",
    validUntil: "متاح لمدة أسبوع",
    rating: 4.7,
    image: v1,
  },
  {
    id: 4,
    title: "عرض الشاورما",
    subTitle: "ساندوتش شاورما دبل + بطاطس + مشروب",
    description:
      "وجبة متكاملة لمحبي الشاورما بسعر اقتصادي",
    oldPrice: 240,
    newPrice: 179,
    discount: "25%",
    badge: "الأفضل قيمة",
    validUntil: "لفترة محدودة",
    rating: 4.6,
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
  loop
  pagination
  className="mySwiper"
>
  {offers.map(
    ({
      id,
      title,
      subTitle,
      description,
      oldPrice,
      newPrice,
      discount,
      badge,
      validUntil,
      rating,
      image,
    }) => (
      <SwiperSlide key={id}>
        <div className="bg-white pt-6 pb-12 xl:pb-6 px-6 rounded-2xl flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          {/* Content */}
          <div className="text-center lg:text-start flex-1">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
              <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                {badge}
              </span>

              <span className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full">
                خصم {discount}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              {title}
            </h2>

            <h4 className="mt-3 text-lg xl:text-2xl text-muted">
              {subTitle}
            </h4>

            <p className="mt-4 text-gray-500 max-w-xl">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">
                  {newPrice} ج
                </span>

                <span className="text-gray-400 line-through">
                  {oldPrice} ج
                </span>
              </div>

              <span className="text-sm text-gray-500">
                ⭐ {rating}
              </span>

              <span className="text-sm text-red-500">
                {validUntil}
              </span>
            </div>

            <button className="mx-auto lg:mx-0 mt-6 rounded-md py-3 px-5 text-sm lg:text-lg text-white bg-black flex items-center gap-2 hover:bg-primary transition-all duration-300">
              <span>اطلب الآن</span>

              <MdKeyboardArrowLeft />
            </button>
          </div>

          {/* Image */}
          <div className="shrink-0">
            <img
              src={image}
              alt={title}
              className="w-40 md:w-52 lg:w-60 xl:w-72 object-contain"
            />
          </div>
        </div>
      </SwiperSlide>
    )
  )}
</Swiper>
    </div>
  );
}
