import { FaMotorcycle } from 'react-icons/fa6'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import v2 from "@/assets/images/v2.jpeg"
export default function MyOrders() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 py-6 px-5 lg:px-8">
        {/* head */}
        <div className="mb-5 flex justify-between items-center border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2 text-gray-800">
            <div className="bg-primary/10 text-primary w-10 h-10 rounded-2xl flex items-center justify-center text-xl">
              <FaMotorcycle />
            </div>
            <h2 className="text-xl font-bold">طلباتي</h2>
          </div>
          <div className="text-sm text-primary font-semibold flex items-center gap-1 cursor-pointer hover:gap-2 transition-all duration-200">
            <h3>عرض الكل</h3>
            <MdKeyboardArrowLeft />
          </div>
        </div>
        {/* content */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 p-3 flex justify-between items-center gap-3 hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="w-24 h-24 lg:w-28 lg:h-28 shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={v2}
                  alt="image-product"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title & Date */}
              <div className="flex-1 text-sm">
                <h3 className="mb-1 text-base font-semibold text-gray-800">
                  جبنه مشكل
                </h3>
                <h3 className="text-gray-400">12.4.2025</h3>
              </div>

              {/* Price & State */}
              <div className="text-sm text-left">
                <h3 className="mb-1 font-bold text-gray-800">124ج</h3>
                <h3 className="bg-green-100 rounded-full text-green-600 py-1 px-3 text-xs whitespace-nowrap">
                  تم التوصيل
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
