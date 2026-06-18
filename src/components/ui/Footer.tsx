import { Link } from "react-router-dom";
import { IoHomeOutline, IoCartOutline, IoCallOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white border-t lg:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 text-xl">

        <Link to="/" className="flex flex-col items-center gap-1 hover:text-primary transition">
          <IoHomeOutline />
          <span className="text-xs">الرئيسية</span>
        </Link>

        <Link to="/cart" className="flex flex-col items-center gap-1 hover:text-primary transition">
          <IoCartOutline />
          <span className="text-xs">السلة</span>
        </Link>

        <Link to="/favorite" className="flex flex-col items-center gap-1 hover:text-primary transition">
          <MdFavoriteBorder />
          <span className="text-xs">المفضلة</span>
        </Link>

        <Link to="/contact" className="flex flex-col items-center gap-1 hover:text-primary transition">
          <IoCallOutline />
          <span className="text-xs">اتصل بنا</span>
        </Link>

      </div>
    </footer>
  );
}