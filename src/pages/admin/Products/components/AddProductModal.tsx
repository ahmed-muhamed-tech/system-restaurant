import type { AddProductModalProps } from "../types";
import Header from "./AddProductModal/Header";

import MainInfoProduct from "./AddProductModal/MainInfoProduct";

export default function AddProductModal({ onClose }: AddProductModalProps) {
  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white overflow-auto rounded-3xl shadow-2xl flex flex-col my-auto border border-gray-100">
        <Header onClose={onClose} />
        {/* Scrollable Form Body */}

        <MainInfoProduct onClose={onClose} />
      </div>
    </div>
  );
}
