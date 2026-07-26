import Navbar from "@/pages/admin/components/Navbar";
import Sidebar from "@/pages/admin/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <div className="h-screen overflow-hidden bg-gray-100">
        <Navbar />
        <div className="flex gap-5 h-screen">
          <Sidebar />

          <div className="flex-1 min-w-0 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
