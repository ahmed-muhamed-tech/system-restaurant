export default function Button({
  text,
  waitingText,
  isPending,
}: {
  text: string;
  waitingText?: string;
  isPending?: boolean;
}) {
  return (
    <button
      disabled={isPending}
      type="submit"
      className="rounded-card text-white  bg-primary py-2 lg:py-3 text-center w-full
                 text-lg lg:text-xl font-medium hover:scale-98 transition-all duration-200"
    >
      {isPending ? waitingText : text}
    </button>
  );
}
