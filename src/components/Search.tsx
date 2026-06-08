import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <div className="bg-white  shadow-2xl shadow-gray-300 py-6 rounded-2xl">
        <div className="mx-auto flex items-center border-muted text-2xl group gap-2 px-2 rounded-2xl border focus-within:border-primary transition-colors duration-300 w-[95%] lg:w-[60%]">
          <input type="text" className="flex-1 outline-none p-2 text-muted" />
          <IoSearchSharp className="group-focus-within:text-muted transition-colors duration-300" />
        </div>
      </div>
  )
}
