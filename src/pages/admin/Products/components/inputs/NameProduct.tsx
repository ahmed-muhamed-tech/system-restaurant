export default function NameProduct({
  name,
  handleOnChange,
}: {
  name: string;
  handleOnChange: (e: any) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5 text-right">
        اسم المنتج <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => handleOnChange(e)}
        placeholder="مثال: بازوكا برجر"
        className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-right"
        required
      />
    </div>
  );
}
