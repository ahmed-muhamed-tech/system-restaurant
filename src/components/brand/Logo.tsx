export default function Logo({ flex, showSidebar }: { flex?: boolean, showSidebar?: boolean }) {
  return (
    <div className={`${flex && "flex items-center gap-2"}`}>
      <div className=" w-24 h-24 bg-linear-to-br from-accent to-primary rounded-[28px] flex items-center justify-center shadow-[0_12px_40px_rgba(242,153,74,0.3)] mb-4 transform transition-transform hover:scale-105 duration-300">
        <div className="relative w-10 h-14 bg-white rounded-b-full rounded-tl-full transform rotate-45 flex items-center justify-center">
          <div className="w-5 h-7 bg-[#F2994A] rounded-b-full rounded-tl-full transform scale-90" />
        </div>
      </div>

      <div className={`${flex && "flex flex-col"} ${!showSidebar && "hidden"}`}>
        <h1 className="text-4xl font-extrabold text-[#0D1C2E] tracking-wide font-sans mb-1">
          مزاج
        </h1>
        <p className="text-sm font-medium text-[#7A869A] tracking-widest">
          طعام يجمعنا
        </p>
      </div>
    </div>
  );
}
