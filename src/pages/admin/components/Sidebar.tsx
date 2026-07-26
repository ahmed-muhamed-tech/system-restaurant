import { CiForkAndKnife } from "react-icons/ci";
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const contentSidebar = [
  {
    title: "الداشبورد",
    icon: <MdOutlineDashboard />,
    path: "/admin/dashboard",
  },
  {
    title: "الطلبات",
    icon: <TbReport />,
    path: "/admin/orders",
  },
  {
    title: "المنتجات",
    icon: <CiForkAndKnife />,
    path: "/admin/products",
  },
  {
    title: "فريق التوصيل",
    icon: <MdOutlineDeliveryDining />,
    path: "/admin/team-order",
  },
  {
    title: "التقارير",
    icon: <HiOutlineDocumentReport />,
    path: "/admin/reports",
  },
  {
    title: "الاعدادات",
    icon: <IoSettingsOutline />,
    path: "/admin/setting",
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-2 text-lg text-gray-900 bg-white py-4 w-60 pr-4">
      {contentSidebar.map(({ title, icon, path }, index) => (
        <Link
          key={index}
          to={path}
          className="flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-200 py-2 px-2 rounded-xl"
        >
          <h4>{icon}</h4>
          <h4>{title}</h4>
        </Link>
      ))}
    </div>
  );
}
