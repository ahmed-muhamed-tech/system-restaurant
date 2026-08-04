
import Navbar from "@/pages/admin/components/Navbar";
import Sidebar from "@/pages/admin/components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [closeSidebar, setCloseSidebar] = useState(true)
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <div className="h-screen overflow-hidden bg-gray-100">
        <Navbar setCloseSidebar={setCloseSidebar} closeSidebar={closeSidebar}/>
        <div className="flex relative gap-5 h-screen pb-45 lg:pb-0">
          <Sidebar closeSidebar={closeSidebar} />

          <div className="flex-1 min-w-0 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
