import {
  CiCircleCheck,
  CiEdit,
  CiExport,
  CiFilter,
  CiMenuKebab,
} from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import v1 from "@/assets/images/v1.png";
import { useEffect, useState } from "react";
import AddProductModal from "./components/AddProductModal";
import getMenuQuery from "./hooks/getMenuQuery";
import Error from "@/components/ui/Error";

const overview = [
  {
    id: 1,
    icon: <IoFastFoodOutline />,
    title: "اجمالي المنتجات",
    subtitle: "منتج",
    countItems: 123,
    style: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    icon: <BiCategory />,
    title: "الأصناف الرئيسيه",
    subtitle: "الأصناف",
    countItems: 45,
    style: "bg-indigo-100 text-indigo-600",
  },
  {
    id: 3,
    icon: <CiCircleCheck />,
    title: "منتجات متاحه",
    subtitle: "من اجمالي 145",
    countItems: 123,
    style: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    icon: <FaRegEyeSlash />,
    title: "منتجات غير متاحه",
    subtitle: "من اجمالي 45",
    countItems: 123,
    style: "bg-red-100 text-red-600",
  },
];

export default function Products() {
  const [addProduct, setAddProduct] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: menu,
    isPending: isLoadingMenu,
    isError: isErrorMenu,
  } = getMenuQuery(currentPage);

  // if (isErrorMenu) return <Error/>;

 
  if (addProduct)
    return (
      <AddProductModal
        onClose={() => setAddProduct(false)}
      />
    );

  return (
    <div className="p-4 md:p-6 dir-rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-4 mb-4">
        <div>
          <div className="text-2xl md:text-3xl mb-1 font-bold flex gap-2 items-center">
            <IoFastFoodOutline className="text-primary text-4xl md:text-5xl" />
            <h2>المنتجات</h2>
          </div>
          <p className="text-sm md:text-base text-gray-600">
            يمكنك تعديل وحذف وقراءة وإضافة منتجاتك بسهولة
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none justify-center flex gap-2 items-center py-2 px-3 md:px-4 text-sm md:text-base text-gray-900 bg-white/60 rounded-lg border border-gray-300 hover:bg-gray-50 active:scale-95 transition-all">
            <CiFilter className="text-xl" />
            <span>فلاتر</span>
          </button>
          <button className="flex-1 md:flex-none justify-center flex gap-2 items-center py-2 px-3 md:px-4 text-sm md:text-base text-gray-900 bg-white/60 rounded-lg border border-gray-300 hover:bg-gray-50 active:scale-95 transition-all">
            <CiExport className="text-xl" />
            <span>تصدير</span>
          </button>
          <button
            onClick={() => setAddProduct(true)}
            className="w-full sm:w-auto flex justify-center gap-2 items-center py-2 px-4 text-sm md:text-base text-white bg-primary rounded-lg border border-primary hover:bg-primary/90 active:scale-95 transition-all"
          >
            <IoMdAdd className="text-xl" />
            <span>إضافة منتج جديد</span>
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {overview.map(({ id, title, subtitle, icon, countItems, style }) => (
          <div
            key={id}
            className="cursor-pointer flex items-center gap-4 border border-gray-200 bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`p-3 md:p-4 text-3xl md:text-4xl rounded-2xl shrink-0 ${style}`}
            >
              {icon}
            </div>

            <div className="flex flex-col gap-0.5">
              <h4 className="text-sm md:text-base font-bold text-gray-700">
                {title}
              </h4>
              <span className="text-xl md:text-2xl font-extrabold text-gray-900">
                {countItems}
              </span>
              <span className="text-xs md:text-sm text-gray-500">
                {subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Products Table Section */}
      <div className="bg-white/40 border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm overflow-hidden">
        {/* Table Header - Desktop Only */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 font-bold text-gray-600 text-sm lg:text-base items-center">
          <div className="col-span-4">المنتج</div>
          <div className="col-span-2">التصنيف</div>
          <div className="col-span-2">السعر</div>
          <div className="col-span-2">الحالة</div>
          <div className="col-span-1">التقييم</div>
          <div className="col-span-1 text-center">الإجراءات</div>
        </div>

        {/* Products List */}
        <div className="flex flex-col divide-y divide-gray-100">
          {!isLoadingMenu
            ? menu?.data.map(
                ({
                  id,
                  images,
                  category,
                  sizes,
                  isAvailable,
                  name,
                  rating,
                  description,
                }: {
                  id: string;
                  images: { url: string }[];
                  category: { name: string };
                  sizes: { price: number }[];
                  isAvailable: boolean;
                  name: string;
                  rating: number;
                  description: string;
                }) => (
                  <div
                    key={id}
                    className="flex flex-col md:grid md:grid-cols-12 gap-4 py-4 items-center hover:bg-white/60 rounded-xl transition-colors px-2"
                  >
                    {/* Product Info */}
                    <div className="flex items-center gap-3 w-full md:col-span-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                        <img
                          src={images[0]?.url}
                          alt="صورة المنتج"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900">
                          {name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                          {description?.split(" ").slice(0, 10).join(" ")}...
                        </p>
                      </div>
                    </div>

                    {/* Mobile View Layout (Details Flex) / Desktop Columns */}
                    <div className="flex justify-between md:contents w-full text-sm md:text-base border-t md:border-t-0 pt-2 md:pt-0 border-gray-100">
                      <div className="md:col-span-2 text-gray-700">
                        <span className="inline md:hidden text-gray-400 font-normal">
                          التصنيف:{" "}
                        </span>
                        {category.name}
                      </div>

                      <div className="md:col-span-2 font-semibold text-gray-900">
                        <span className="inline md:hidden text-gray-400 font-normal">
                          السعر:{" "}
                        </span>
                        {sizes[0]?.price} ج.م
                      </div>

                      <div className="md:col-span-2">
                        {isAvailable ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                            متاح
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-red-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                            غير متاح
                          </span>
                        )}
                      </div>

                      <div className="md:col-span-1 text-gray-600">
                        <span className="inline md:hidden text-gray-400 font-normal">
                          التقييم:{" "}
                        </span>
                        {rating}
                      </div>

                      {/* Actions */}
                      <div className="md:col-span-1 flex items-center justify-end md:justify-center gap-3 text-gray-600">
                        <button className="p-1.5 hover:bg-gray-100 rounded-lg hover:text-primary transition-colors">
                          <FaRegEye className="text-lg" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded-lg hover:text-blue-600 transition-colors">
                          <CiEdit className="text-xl" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded-lg hover:text-gray-900 transition-colors">
                          <CiMenuKebab className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                ),
              )
            : Array.from({ length: 10 }).map((_, index: number) => (
                <div
                  key={index / 0.21}
                  className="flex flex-col md:grid md:grid-cols-12 gap-4 py-4 items-center hover:bg-white/60 rounded-xl transition-colors px-2"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-3 w-full md:col-span-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl border border-gray-100 bg-gray-200"></div>

                    <div className="flex-1">
                      <h3 className="h-4 w-22  bg-gray-200"></h3>
                      <div>
                        <p className="h-2 bg-gray-200 w-12"></p>

                        <p className="h-2 bg-gray-200 w-22"></p>

                        <p className="h-2 bg-gray-200 w-26"></p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile View Layout (Details Flex) / Desktop Columns */}
                  <div className="flex justify-between md:contents w-full text-sm md:text-base border-t md:border-t-0 pt-2 md:pt-0 border-gray-100">
                    <span className="w-14 h-14 bg-gray-200"></span>

                    <span className="w-14 h-14 bg-gray-200"></span>

                    <div className="md:col-span-2">
                      <span className=" px-2.5 py-1 rounded-full bg-green-50">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                      </span>
                    </div>

                    <span className="w-14 h-14 bg-gray-200"></span>

                    {/* Actions */}
                    <div className="md:col-span-1 flex items-center justify-end md:justify-center gap-3 text-gray-600">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg hover:text-primary transition-colors">
                        <FaRegEye className="text-lg text-gray-200" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg hover:text-blue-600 transition-colors">
                        <CiEdit className="text-xl text-gray-200" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg hover:text-gray-900 transition-colors">
                        <CiMenuKebab className="text-xl text-gray-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* pagination */}
        {isLoadingMenu ? (
          <div className="flex mt-12 mx-auto mb-22 items-center w-fit gap-2 flex-wrap">
            {Array.from({ length: 10 }).map((_, index: number) => (
              <button
                key={index}
                className={`w-8 h-8 lg:w-12 lg:h-12 bg-gray-200 rounded-md lg:rounded-xl `}
              ></button>
            ))}
          </div>
        ) : (
          <div className="flex mt-12 mx-auto mb-22 items-center w-fit gap-2 flex-wrap">
            {Array.from({ length: menu?.meta?.totalPages }).map(
              (_, index: number) => (
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  key={index}
                  className={`w-8 h-8 lg:w-12 lg:h-12 border-primary border flex justify-center items-center text-lg lg:text-2xl rounded-md lg:rounded-xl hover:bg-primary hover:text-white ${menu?.meta?.page === index + 1 ? "bg-primary text-white" : " bg-primary/30 text-black"} transition-all duration-200`}
                >
                  <span>{index + 1}</span>
                </button>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
