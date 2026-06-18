import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-xl text-center"
      >
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-red-100 text-red-500 p-5 rounded-full text-7xl">
            <MdErrorOutline />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-7xl font-bold text-gray-900">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          الصفحة غير موجودة
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-lg leading-relaxed">
          الرابط الذي تحاول الوصول إليه غير صحيح
          أو ربما تم حذف الصفحة.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center">
          
          <Link
            to="/"
            className="
              flex items-center gap-2
              bg-primary
              text-white
              py-3 px-6
              rounded-2xl
              text-lg
              hover:scale-105
              transition-all duration-300
            "
          >
            <IoHomeOutline className="text-2xl" />

            <span>العودة للرئيسية</span>
          </Link>

        </div>
      </motion.div>
    </div>
  );
}