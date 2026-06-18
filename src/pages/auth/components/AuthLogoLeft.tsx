import Logo from "@/components/brand/Logo";

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
        <Logo />
      </div>
    </div>
  );
}
