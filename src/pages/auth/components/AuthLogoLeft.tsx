export default function AuthLogoLeft() {
  return (
    <div className=" xl:flex relative hidden flex-col items-center justify-center min-h-screen bg-[#F7F6F0] w-full lg:w-1/2 overflow-hidden p-8 select-none">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#E2E1DA 1px, transparent 1.5px), 
            linear-gradient(to right, #E2E1DA 0.5px, transparent 0.5px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute w-100 h-100 rounded-full bg-linear-to-r from-orange-100/50 to-amber-100/30 blur-3xl pointer-events-none" />

      <div className="absolute top-[20%] left-[25%] bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform -rotate-12 animate-bounce [animation-duration:4s]">
        <span className="text-xl">🌮</span>
      </div>

      <div className="absolute top-[35%] right-[25%] bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform rotate-12 animate-pulse [animation-duration:3s]">
        <span className="text-xl">🍕</span>
      </div>

      <div className="absolute bottom-[25%] right-[20%] bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform rotate-6 animate-bounce [animation-duration:5s]">
        <span className="text-xl">🍔</span>
      </div>

      <div className="relative flex flex-col items-center z-10 text-center">
        <div className="w-24 h-24 bg-linear-to-br from-accent to-primary rounded-[28px] flex items-center justify-center shadow-[0_12px_40px_rgba(242,153,74,0.3)] mb-4 transform transition-transform hover:scale-105 duration-300">
          <div className="relative w-10 h-14 bg-white rounded-b-full rounded-tl-full transform rotate-45 flex items-center justify-center">
            <div className="w-5 h-7 bg-[#F2994A] rounded-b-full rounded-tl-full transform scale-90" />
          </div>
        </div>

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
