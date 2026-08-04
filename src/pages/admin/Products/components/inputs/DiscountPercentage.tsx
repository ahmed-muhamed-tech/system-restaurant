export default function DiscountPercentage({
  discountPercentage,
  handleOnChange,
}: {
  discountPercentage: number;
  handleOnChange: (e: any) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5 text-right">
        نسبه الخصم <span className="text-red-500">*</span>
      </label>
      <div className="relative flex items-center">
        <input
          type="number"
          name="discountPercentage"
          value={discountPercentage}
          onChange={(e) => handleOnChange(e)}
          placeholder="أدخل السعر"
          className="w-full pl-16 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-right"
          required
        />
        <span className="absolute left-0 top-0 bottom-0 px-4 bg-gray-100 border-r border-gray-200 rounded-l-xl text-xs font-medium text-gray-500 flex items-center justify-center">
          جنيه
        </span>
      </div>
    </div>
  );
}
