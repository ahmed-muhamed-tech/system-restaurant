import ButtonsCountProducts from "@/components/ui/ButtonsCountProducts";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

type CardProductProps = {
  image: string;
  title?: string;
  description?: string;
  price?: number;
};

export default function CardProduct({
  image,
  title,
  description,
  price,
}: CardProductProps) {
  const [count, setCount] = useState(1);
  return (
    <div className="w-full bg-white rounded-2xl py-2 px-4">
      <div className="flex justify-between items-center mb-4 border-b border-primary pb-2 ">
        <div className="flex gap-2 items-center">
          <div className="w-28">
            <img src={image} alt="image-product" />
          </div>

          <div>
            <h3 className="text-xl">نودلز بالدجاج</h3>
            <p className="text-lg">وسط شيز جبنه اضافيه</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl">200 ج.م</h3>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ButtonsCountProducts count={count} setCount={setCount} />

        <button className="text-red-500 text-3xl hover:bg-red-500 hover:text-white transition-all duration-300 rounded-full w-9 h-9 flex justify-center items-center">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
