import v1 from "@/assets/images/v1.png";
import CardProduct from "./components/CardProduct";
export default function Cart() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 w-full lg:h-screen lg:overflow-hidden px-6 lg:px-0 lg:pl-5">
      {/* Products */}
      <div className="lg:w-2/3 py-8 px-4 lg:overflow-y-auto">
        {/* Head */}
        <div className="flex gap-1 text-xl font-semibold items-center">
          <h2 className="text-gray-700">سله الطلبات</h2>
          <div className="text-white bg-primary w-8 h-8 rounded-full flex items-center justify-center font-black">
            <h2>3</h2>
          </div>
        </div>

        {/* Products */}
        <div className="mt-8 flex flex-col gap-4 ">``
          {Array.from({ length: 10 }).map(() => (
            // details
            <CardProduct image={v1}/>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="lg:w-1/3 p-4 rounded-xl mt-12 h-fit bg-white">
        <h3 className="text-xl text-gray-800">ملخص الطلب</h3>

        <div className="mt-4 flex flex-col gap-1 mb-2 pb-3 border-b border-gray-500">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <h4>المجموع الفرعي</h4>
            <h4>364 ج.م</h4>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <h4>رسوم التوصيل</h4>
            <h4>63 ج.م</h4>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <h4>الخصم</h4>
            <h4>36 ج.م</h4>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <h4>الضريبه</h4>
            <h4>68 ج.م</h4>
          </div>
        </div>

        <div className="flex justify-between items-center mb-5 text-2xl">
          <h3>الاجمالي</h3>

          <h3 className="text-primary">354 ج.م</h3>
        </div>

        <button className="text-white bg-primary text-center w-full mt-2 rounded-2xl py-3 text-xl hover:font-bold transition-all duration-300">
          اتمام الطلب
        </button>
      </div>
    </div>
  );
}
