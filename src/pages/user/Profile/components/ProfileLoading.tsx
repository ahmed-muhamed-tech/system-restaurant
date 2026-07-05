export default function ProfileLoading() {
  return (
    <div className="flex flex-col gap-5 px-4 lg:px-12 py-12 animate-pulse">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-42 h-42 lg:w-62 lg:h-62 rounded-full bg-gray-200 shrink-0" />
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <div className="h-6 bg-gray-200 rounded-full w-2/3" />
          <div className="h-5 bg-gray-200 rounded-full w-1/2" />
          <div className="h-5 bg-gray-200 rounded-full w-3/4" />
          <div className="h-9 bg-gray-200 rounded-2xl w-48 mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="h-28 bg-gray-200 rounded-3xl" />
        <div className="h-28 bg-gray-200 rounded-3xl" />
      </div>
    </div>
  );
}
