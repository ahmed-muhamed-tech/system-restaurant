export default function Description({
  description,
  handleOnChange,
}: {
  description: string;
  handleOnChange: (e: any) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5 text-right">
        الوصف <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <textarea
          name="description"
          rows={4}
          value={description}
          onChange={(e) => handleOnChange(e)}
          placeholder="اكتب وصف المنتج بالتفصيل..."
          className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-right resize-none"
        />
        <span className="absolute bottom-2 left-3 text-[11px] text-gray-400 dir-ltr">
          {description.length} / 300
        </span>
      </div>
    </div>
  );
}
