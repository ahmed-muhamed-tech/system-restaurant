export default function ButtonCategoryLoading() {
  return (
    <button
      className={`flex flex-col justify-evenly text-xl rounded-2xl shadow bg-white 
        transition-all duration-300 h-8 animate-pulse w-24`}
    >
        <span className="block h-1 w-full bg-gray-200"></span>
        <span className="block h-1 w-full bg-gray-200"></span>
        <span className="block h-1 w-full bg-gray-200"></span>
    </button>
  );
}
