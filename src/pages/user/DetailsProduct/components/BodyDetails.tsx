import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import type { CurrentProduct } from "@/pages/user/DetailsProduct/models";
import useProductDetails from "../hooks/useProductDetails";
import "@/pages/user/DetailsProduct/style.css";
export default function BodyDetails({
  currentProduct,
}: {
  currentProduct: CurrentProduct;
}) {
  const {
    isAvailable,
    name,
    rating,
    description,
    addons,
    sizes,
    discountPercentage,
    hasDiscount,
  } = currentProduct;

  // Default select size
  const defaultSizeLabel = sizes[0].label;
  const defaultSizePrice = sizes[0].price;

  const {
    setCount,
    count,
    finalPrice,
    selectedSize,
    handleAddSizes,
    handleCheckedAddons,
  } = useProductDetails(
    defaultSizeLabel,
    defaultSizePrice,
    hasDiscount,
    discountPercentage,
  );

  return (
    <div className="h-full flex flex-col gap-11 justify-between">
      <div>
        {/* Title */}
        <h2 className="text-4xl mb-3 text-gray-700">{name}</h2>

        {/* Rating */}
        <div className="text-primary mb-4 flex gap-2 items-center text-2xl">
          {Array.from({ length: Math.floor(rating) }).map((_, index) => (
            <IoIosStar key={index} />
          ))}
          {!Number.isInteger(rating) && <IoIosStarHalf />}
        </div>

        {/* Price and Descount if have it */}
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <span className="text-3xl font-bold text-primary">
            {hasDiscount && discountPercentage
              ? Math.floor(defaultSizePrice - defaultSizePrice * (discountPercentage / 100))
              : Math.floor(defaultSizePrice)}
            ج.م
          </span>

          {hasDiscount && (
            <>
              <span className="line-through text-gray-400 text-lg">
                {Math.floor(defaultSizePrice)} ج.م
              </span>

              <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                خصم {discountPercentage}%
              </span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-8 text-lg mt-4">{description}</p>

        {/* Sizes */}
        <h3 className="text-muted mt-6 text-xl">الحجم</h3>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {sizes.map(({ label, price, id, isAvailable }) => (
            <button
              key={id}
              onClick={() => handleAddSizes(label, price)}
              disabled={!isAvailable}
              className={`
                rounded-2xl py-3
                border transition-all duration-300
                ${
                  !isAvailable
                    ? "bg-gray-100 text-gray-400"
                    : selectedSize.label === label
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white border-gray-200 hover:border-primary"
                }
              `}
            >
              <h4 className="font-medium">{label}</h4>
              <p className="text-sm">{price} ج.م</p>
            </button>
          ))}
        </div>

        {/* Addons */}
        <h3 className="text-muted text-xl mt-8 mb-4">الإضافات</h3>
        <div className="flex flex-col gap-3">
          {addons?.map(({ name, price, id }) => (
            <label
              key={id}
              htmlFor={id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 cursor-pointer hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={id}
                  onChange={(e) => {
                    handleCheckedAddons(id, e.target.checked, name, price);
                  }}
                  className="w-5 h-5 accent-primary"
                />

                <div>
                  <h4 className="text-gray-800 font-medium">{name}</h4>
                  <p className="text-sm text-muted">إضافة اختيارية</p>
                </div>
              </div>

              <span className="text-primary font-semibold">+{price} ج.م</span>
            </label>
          ))}
        </div>
      </div>

      {/* Button count product & Button add to cart */}
      <div className="w-full flex-wrap justify-center md:justify-start flex gap-5 items-center  text-2xl">
        <div className="flex flex-col gap-2 items-center  sm:flex-row md:gap-5 bg-gray-100 rounded-full px-3 py-2">
          <button
            disabled={!isAvailable}
            onClick={() => {
              setCount((pre) => pre + 1);
            }}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
          >
            +
          </button>

          <span className="font-bold text-xl w-6 text-center">{count}</span>

          <button
            disabled={!isAvailable}
            onClick={() => {
              if (count > 1) setCount((pre) => pre - 1);
            }}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
          >
            -
          </button>
        </div>

        <button
          disabled={!isAvailable}
          className="
            text-lg
            lg:text-2xl
            flex-1
            bg-primary
            text-white
            py-5
            rounded-2xl
            font-semibold
            shadow-lg
            hover:scale-[1.02]
            transition
            flex
            flex-wrap
            justify-center items-center gap-2
          "
        >
          {isAvailable ? (
            <>
              <span>أضف إلى السلة</span>

              <div className="bg-white/20 px-4 py-1 rounded-full font-bold">
                {Math.floor(finalPrice)} ج.م
              </div>
            </>
          ) : (
            <span className="mx-auto">هذا المنتج غير متاح حالياً</span>
          )}
        </button>
      </div>
    </div>
  );
}
