type ConfirmProps = {
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isPending: boolean
};

export default function Confirm({
  title = "تأكيد العملية",
  message,
  onConfirm,
  onCancel,
  isPending
}: ConfirmProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full relative max-w-md rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>

        <p className="text-gray-500 leading-7 mb-8">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="
              flex-1
              py-3
              rounded-2xl
              border
              border-gray-200
              text-gray-700
              hover:bg-gray-100
              transition
            "
          >
            إلغاء
          </button>

          <button
            onClick={onConfirm}
            className="
              flex-1
              py-3
              rounded-2xl
              bg-red-500
              text-white
              font-semibold
              hover:bg-red-600
              transition
            "
            disabled={isPending}
          >
            {isPending ? "جاري الحذف" : "تأكيد"}
          </button>
        </div>
      </div>
    </div>
  );
}
