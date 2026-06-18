import { motion } from "motion/react";

export default function CardProductLoading() {
  return (
    <motion.div
      className="flex flex-col-reverse justify-between overflow-hidden rounded-3xl bg-white animate-pulse"
    >
      {/* Content */}
      <div className="p-4 flex flex-col justify-between gap-6">
        <div className="space-y-3">
          {/* Title */}
          <div className="h-6 w-3/4 rounded bg-gray-200"></div>

          {/* Lines */}
          <div className="h-3 w-full rounded bg-gray-200"></div>
          <div className="h-3 w-5/6 rounded bg-gray-200"></div>
          <div className="h-3 w-2/3 rounded bg-gray-200"></div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          {/* Price */}
          <div className="h-5 w-20 rounded bg-gray-200"></div>

          {/* Button */}
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        </div>
      </div>

      {/* Image */}
      <div className="h-52 lg:h-66 w-full bg-gray-200"></div>
    </motion.div>
  );
}