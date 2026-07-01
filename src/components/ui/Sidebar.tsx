import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import {
  IoBagHandleOutline,
  IoCartOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { MdFavoriteBorder, MdKeyboardDoubleArrowLeft } from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import useStore from "@/session/storeAuth";
import {  useCartStore } from "@/pages/user/cart/store/cart";
const pages = [
  {
    id: "home",
    title: "الرئيسية",
    path: "/",
    icon: <IoHomeOutline />,
  },
  {
    id: "orders",
    title: "الطلبات",
    path: "/order",
    icon: <IoBagHandleOutline />,
  },
  {
    id: "cart",
    title: "السلة",
    path: "/cart",
    icon: <IoCartOutline />,
  },
  {
    id: "favorite",
    title: "المفضلة",
    path: "/favorites",
    icon: <MdFavoriteBorder />,
  },
];

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const {count} = useCartStore()


  const { pathname } = useLocation();
  const { token } = useStore();

  const mobilePages = [
    ...pages,
    {
      id: "profile",
      title: token ? "حسابي" : "دخول",
      path: token ? "/profile-user" : "/auth/login",
      icon: <CgProfile />,
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        layout
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
        className={`
          hidden lg:flex
          ${showSidebar ? "w-64" : "w-24"}
          sticky top-0
          h-screen
          bg-white
          border-l
          border-gray-300
          shadow-sm
          flex-col
          justify-between
          p-4
          shrink-0
        `}
      >
        <div>
          {/* Header */}
          <div
            className={`mb-10 flex items-center ${
              showSidebar ? "justify-between" : "justify-center"
            }`}
          >
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className={`
                text-3xl
                transition-all
                duration-300
                hover:text-primary
                cursor-pointer
                ${showSidebar ? "rotate-180" : ""}
              `}
            >
              <MdKeyboardDoubleArrowLeft />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {pages.map(({ id, title, path, icon }) => {
              const active = pathname === path;

              return (
                <Link
                  key={id}
                  to={path}
                  className={`
                    flex items-center gap-3
                    rounded-2xl
                    px-4 py-3
                    transition-all duration-300
                    relative

                    ${
                      active
                        ? "bg-primary text-white shadow-md"
                        : "hover:bg-primary/10"
                    }
                  `}
                >
                  <div className={`text-2xl ${!showSidebar ? "mx-auto" : ""}`}>
                    {icon}
                  </div>

                  {id === "cart" && count > 0  && (
                    <div className="absolute -top-2 -left-3 rounded-2xl text-white w-6 h-6 bg-accent flex justify-center items-center ">
                      <span>{count}</span>
                    </div>
                  )}

                  {showSidebar && (
                    <span className="whitespace-nowrap font-medium">
                      {title}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-3">
          {token ? (
            <>
              <Link
                to="/profile-user"
                className={`
                  flex items-center gap-3
                  rounded-2xl
                  px-4 py-3
                  transition-all
                  hover:bg-primary/10
                `}
              >
                <div className={`text-2xl ${!showSidebar ? "mx-auto" : ""}`}>
                  <CgProfile />
                </div>

                {showSidebar && <span>البروفايل</span>}
              </Link>

              <Link
                to="/settings"
                className={`
                  flex items-center gap-3
                  rounded-2xl
                  px-4 py-3
                  transition-all
                  hover:bg-primary/10
                `}
              >
                <div className={`text-2xl ${!showSidebar ? "mx-auto" : ""}`}>
                  <IoSettingsOutline />
                </div>

                {showSidebar && <span>الإعدادات</span>}
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/register"
                className="
                  bg-primary
                  text-white
                  text-center
                  rounded-xl
                  py-3
                  font-medium
                "
              >
                إنشاء حساب
              </Link>

              <Link
                to="/auth/login"
                className="
                  border
                  border-primary
                  text-primary
                  text-center
                  rounded-xl
                  py-3
                  font-medium
                "
              >
                تسجيل الدخول
              </Link>
            </>
          )}
        </div>
      </motion.aside>

      {/* Mobile Bottom Navigation */}
      <div
        className="
          lg:hidden
          fixed
          bottom-4
          left-4
          right-4
          z-50
          bg-white
          rounded-3xl
          shadow-xl
          border
          border-gray-400
          px-2
          py-3
        "
      >
        <div className="flex items-center justify-around">
          {mobilePages.map(({ id, title, path, icon }) => {
            const active = pathname === path;

            return (
              <Link
                key={id}
                to={path}
                className={`
                  flex flex-col items-center
                  relative
                  gap-1
                  px-3 py-2
                  rounded-xl
                  transition-all duration-300

                  ${active ? "bg-primary text-white" : "text-gray-600"}
                `}
              >
                <div className="text-2xl">{icon}</div>

                {id === "cart" && count > 0 && (
                  <div className="absolute -top-2 -left-3 rounded-2xl text-white w-6 h-6 bg-accent flex justify-center items-center ">
                    <span>{count}</span>
                  </div>
                )}

                <span className="text-xs font-medium">{title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
