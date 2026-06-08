import { useParams } from "react-router-dom";
import {
  useFetchAddonsForMenu,
  useFetchCurrentProduct,
} from "../features/user/hookUser";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useEffect, useState } from "react";
import ImageDetailsLoading from "../components/ImageDetailsLoading";
import BodyDetailsLoading from "../components/BodyDetailsLoading";

type Image = {
  id: string;
  url: string;
};

type Category = {
  name: string;
  slug: string;
};

type Addons = {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
};

type Data = {
  id: string;
  images: Image[];
  isAvailable: boolean;
  name: string;
  hasDiscount: boolean;
  price: number;
  rating: number;
  description: string;
  category: Category;
  addons: Addons[];
};

export default function DetailsProduct() {
  let { productId } = useParams();

  const { data, isPending, isError } = useFetchCurrentProduct(productId);

  const [countMenu, setCountMenu] = useState(1);
  const [priceMenu, setPriceMenu] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    id,
    images,
    isAvailable,
    name,
    hasDiscount,
    price,
    rating,
    description,
    category,
    addons,
  }: Data = data || {};
  console.log(data);

  useEffect(() => {
    setTotalPrice(priceMenu * countMenu);
  }, [countMenu, priceMenu]);

  console.log(priceMenu);

  useEffect(() => {
    setPriceMenu(price);
  }, [data]);

  const handleCart = () => {
    
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:overflow-hidden h-screen">
      <div className="h-[60%] w-full lg:h-full lg:w-[50%] rounded-2xl shadow-card">
        {data && (
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            pagination={true}
            className="mySwiper h-full w-full"
          >
            {images &&
              images?.map(({ id, url }: { id: string; url: string }) => (
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
      </div>

      <div className="flex-1 bg-white rounded-2xl py-8 px-6 lg:overflow-y-auto pb-33 lg:pb-8">
        {data && (
          <div className="h-full flex flex-col gap-11 justify-between">
            <div>
              <h2 className="text-4xl mb-3 text-gray-700">{name}</h2>
              <div className="text-primary mb-4 flex gap-2 items-center text-2xl">
                {Array.from({ length: Math.floor(rating) }).map(() => (
                  <IoIosStar />
                ))}
                {!Number.isInteger(2.3) && <IoIosStarHalf />}
              </div>

              <h3 className="mb-12 flex gap-2 items-center">
                <span className="text-2xl text-primary ">{price} ج.م</span>
                <span className="line-through text-muted text-xl">400ج.م</span>

                <span className="text-primary bg-primary/10 py-1 px-2 text-sm rounded-md">
                  30%
                </span>
              </h3>
              <p className="text-lg leading-8 text-gray-800 ">{description}</p>

              <h3 className="text-muted mt-6 text-xl">الحجم</h3>

              <div className="flex gap-1 items-center mt-4">
                <button className="bg-gray-muted bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 py-1 w-18 text-center rounded-2xl text-sm">
                  صغير
                </button>
                <button className="bg-gray-muted bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 py-1 w-18 text-center rounded-2xl text-sm">
                  متوسط
                </button>
                <button className="bg-gray-muted bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 py-1 w-18 text-center rounded-2xl text-sm">
                  كبير
                </button>
              </div>

              <h3 className="text-muted text-xl mt-8">الاضافات</h3>

              <div className="mt-2 flex flex-col gap-4">
                {addons?.map(
                  ({
                    name,
                    price,
                    id,
                  }: {
                    name: string;
                    price: number;
                    id: string;
                  }) => (
                    <div
                      key={id}
                      className="flex justify-between text-lg relative pb-3"
                    >
                      <div className="bg-primary/30 h-1 w-full bottom-0 left-0 absolute"></div>
                      <div className="flex gap-2 items-center w-full">
                        <input
                          className="rounded-2xl bg-primary"
                          type="checkbox"
                          name={name}
                          id={id}
                          onChange={(e) => {
                            const checked = e.target.checked;

                            checked
                              ? setPriceMenu(priceMenu + price)
                              : setPriceMenu(priceMenu - price);
                          }}
                        />
                        <label htmlFor={id} className="flex-1 cursor-pointer">
                          {name}
                        </label>
                      </div>
                      <h4>{price}ج.م</h4>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="w-full flex gap-5 items-center  text-2xl">
              <div className="flex items-center gap-4 bg-gray-200 rounded-2xl">
                <button
                  onClick={() => {
                    const count = countMenu + 1;
                    setCountMenu(count);
                  }}
                  className="w-9 h-9 text-gray-900 bg-white rounded-full hover:bg-primary  hover:text-white transition-all duration-300"
                >
                  +
                </button>
                <h4>{countMenu}</h4>
                <button
                  onClick={() => {
                    if (countMenu > 1) {
                      const count = countMenu - 1;
                      setCountMenu(count);
                    }
                  }}
                  className="w-9 h-9 text-gray-900 bg-white rounded-full hover:bg-primary  hover:text-white transition-all duration-300"
                >
                  -
                </button>
              </div>
              <button onClick={handleCart} className="flex-1 bg-primary py-4 text-center text-white rounded-2xl">
                أضافه الي السله - {totalPrice}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
