import type { Dispatch, SetStateAction } from "react";

type InputsIntoAddons = { name: string; price: number };

type AddNewSizesProps = {
  addons: InputsIntoAddons[];
  setAddons: Dispatch<SetStateAction<InputsIntoAddons[]>>;
};

export default function AddNewAddons({ addons, setAddons }: AddNewSizesProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex-1">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-lg font-bold text-gray-800">الإضافات</h4>
          <p className="text-sm text-gray-500">
            أضف الإضافات الخاصة بهذه الوجبة
          </p>
        </div>

        <button
          onClick={() => {
            setAddons([
              ...addons,
              {
                name: "",
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
        {addons.map((addon, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 bg-gray-50"
          >
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-gray-700">
                الإضافة {index + 1}
              </h5>

              <button
                onClick={() => setAddons(addons.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-600 text-sm"
              >
                حذف
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  اسم الإضافة
                </label>

                <input
                  type="text"
                  value={addon.name}
                  onChange={(e) => {
                    const newAddons = addons.map((addon, currentIndex) => {
                      if (currentIndex === index) {
                        return {
                          ...addon,
                          name: e.target.value,
                        };
                      }
                      return addon;
                    });

                    setAddons(newAddons);
                  }}
                  placeholder="مثال: جبنة إضافية"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  السعر
                </label>

                <input
                  type="number"
                  value={addon.price}
                  onChange={(e) => {
                    const newAddons = addons.map((addon, currentIndex) => {
                      if (currentIndex === index) {
                        return {
                          ...addon,
                          price: Number(e.target.value),
                        };
                      }
                      return addon;
                    });

                    setAddons(newAddons);
                  }}
                  placeholder="0"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {addons.length === 0 && (
        <div className="border-2 border-dashed border-gray-300 rounded-xl py-10 text-center text-gray-500 mt-2">
          لا توجد إضافات حتى الآن
        </div>
      )}
    </div>
  );
}
