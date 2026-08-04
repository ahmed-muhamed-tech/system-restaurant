import type { Dispatch, SetStateAction } from "react"

type InputsIntoSizes = {
    label: string,
    slug: string,
    price: number
}

type AddNewSizesProps = {
    sizes: InputsIntoSizes[],
    setSizes: Dispatch<SetStateAction<InputsIntoSizes[]>>
}

export default function AddNewSizes({sizes, setSizes}: AddNewSizesProps){
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex-1">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-lg font-bold text-gray-800">الأحجام</h4>
                <p className="text-sm text-gray-500">
                  أضف الأحجام والأسعار الخاصة بالوجبة
                </p>
              </div>

              <button
                onClick={() => {
                  setSizes([
                    ...sizes,
                    {
                      label: "",
                      slug: "",
                      price: 0,
                    },
                  ]);
                }}
                className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition"
              >
                + إضافة
              </button>
            </div>

            <div className="space-y-4">
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4 bg-gray-50"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-semibold text-gray-700">
                      الحجم {index + 1}
                    </h5>

                    <button
                      onClick={() =>
                        setSizes(sizes.filter((_, i) => i !== index))
                      }
                      className="text-red-500 hover:text-red-600 text-sm"
                    >
                      حذف
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        اسم الحجم
                      </label>

                      <input
                        type="text"
                        value={size.label}
                        onChange={(e) => {
                          const newSizes = sizes.map((size, currentIndex) => {
                            if (currentIndex === index) {
                              return {
                                ...size,
                                label: e.target.value,
                              };
                            }
                            return size;
                          });

                          setSizes(newSizes);
                        }}
                        placeholder="مثال: كبير"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Slug
                      </label>

                      <input
                        type="text"
                        value={size.slug}
                        onChange={(e) => {
                          const newSizes = sizes.map((size, currentIndex) => {
                            if (currentIndex === index) {
                              return {
                                ...size,
                                slug: e.target.value,
                              };
                            }
                            return size;
                          });

                          setSizes(newSizes);
                        }}
                        placeholder="large"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-primary"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm text-gray-600 mb-1">
                        السعر
                      </label>

                      <input
                        type="number"
                        value={size.price}
                        onChange={(e) => {
                          const newSizes = sizes.map((size, currentIndex) => {
                            if (currentIndex === index) {
                              return {
                                ...size,
                                price: Number(e.target.value),
                              };
                            }
                            return size;
                          });

                          setSizes(newSizes);
                        }}
                        placeholder="0"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sizes.length === 0 && (
              <div className="border-2 border-dashed border-gray-300 rounded-xl py-10 mt-2 text-center text-gray-500">
                لا توجد أحجام حتى الآن
              </div>
            )}
          </div>
    )
}