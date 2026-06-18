import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar />

        <div className="flex-1 min-w-0 overflow-y-auto px-4 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
