import { CgMenuRound } from "react-icons/cg";
import type { ButtonCategoryProps } from "@/pages/user/home/models";

export default function ButtonCategory({
  label,
  isActive,
}: ButtonCategoryProps) {
  return (
    <button
      className={`flex items-center  gap-2 text-xl  py-2 px-4 rounded-2xl shadow 
        hover:shadow-gray-300 hover:bg-primary hover:text-white 
        ${isActive ? "shadow-gray-300 bg-primary text-white" : "bg-white"} 
        transition-all duration-300`}
    >
      <CgMenuRound />
      <span>{label}</span>
    </button>
  );
}
