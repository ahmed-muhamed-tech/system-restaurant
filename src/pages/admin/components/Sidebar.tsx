import { CiForkAndKnife } from "react-icons/ci";
import { MdOutlineDashboard, MdOutlineDeliveryDining } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

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

export default function Sidebar({ closeSidebar }: { closeSidebar: boolean }) {
  return (
    <div
      className={`absolute bottom-25 text-xs left-1/2 right-1/2 transform translate-x-1/2 w-[85%]   border rounded-2xl  border-gray-400 grid grid-cols-3 lg:relative lg:top-0 lg:left-0 lg:translate-x-0 lg:right-0 lg:rounded-none lg:border-none lg:flex lg:flex-col gap-1 lg:gap-2 lg:text-lg text-gray-900 bg-white py-4 lg:w-60 pr-4 ${closeSidebar && "lg:w-fit"}`}
    >
      {contentSidebar.map(({ title, icon, path }, index) => (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive && "bg-primary text-white"} hover:bg-primary hover:text-white transition-all duration-200 p-1 lg:p-2 rounded-lg lg:rounded-xl ${closeSidebar && "lg:w-fit lg:text-3xl"}`
          }
        >
          <h4>{icon}</h4>
          {!closeSidebar && <h4 className="hidden lg:block">{title}</h4>}
          <h4 className="lg:hidden block">{title}</h4>
        </NavLink>
      ))}
    </div>
  );
}
