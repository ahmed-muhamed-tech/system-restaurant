import { FiChevronDown } from "react-icons/fi";
import getCategoriesQuery from "../../hooks/getCategoriesQuery";

export default function Category({ category, handleOnChange }: {category: string, handleOnChange: (e: any) => void}) {
  const { data: categories, isPending: isLoadingCategories } =
    getCategoriesQuery();
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5 text-right">
        التصنيف <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          name="category"
          value={category}
          onChange={(e) => handleOnChange(e)}
          className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:border-orange-500 focus:bg-white appearance-none transition-all text-right"
          required
        >
          <option disabled value="">
            اختر تصنيف
          </option>
          {categories?.map(
            ({
              id,
              name,
              isActive,
            }: {
              id: string;
              name: string;
              isActive: boolean;
            }) =>
              isActive && (
                <option key={id} value={id}>
                  {name}
                </option>
              ),
          )}
        </select>
        <FiChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
      </div>
    </div>
  );
}
