type ButtonsCountProductsProps = {
  isAvailable?: boolean;
  count: number;
  increase: () => void;
  decrease: () => void;
  isLoading?: boolean
};

export default function ButtonsCountProducts({
  isAvailable = true,
  count,
  increase,
  decrease,
  isLoading
}: ButtonsCountProductsProps) {
  return (
    <div className="flex gap-2 items-center md:gap-5 bg-gray-100 rounded-full px-2 py-1 lg:px-3 lg:py-2">
      <button
        disabled={!isAvailable || isLoading}
        onClick={increase}
        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
      >
        +
      </button>

      <span className="font-bold text-lg lg:text-xl w-6 text-center">
        {count}
      </span>

      <button
        disabled={!isAvailable || isLoading}
        onClick={decrease}
        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
      >
        -
      </button>
    </div>
  );
}
