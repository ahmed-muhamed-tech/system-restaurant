import { Outlet } from "react-router-dom";
import AuthLogoLeft from "../components/AuthLogoLeft";

export default function AuthLayout() {
  return (
    <div className="flex items-center  justify-center xl:justify-between min-h-screen bg-white">
      {/* Logo Auth */}
      <AuthLogoLeft />

      {/* form */}
      <div className="h-full w-full xl:w-1/2 flex justify-center items-center ">
        <div className=" w-[95%] lg:w-[90%]  shadow-2xl  shadow-gray-400 p-5 border-border rounded-card" >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
