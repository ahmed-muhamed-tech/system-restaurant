import { useState } from "react";
import Categories from "@/pages/user/home/components/Categories";
import Products from "@/pages/user/home/components/Products";

export default function ProductsContainer() {
  const [category, setCategory] = useState("all");

  return (
    <>
      {/* Categories */}
      <Categories category={category} setCategory={setCategory} />

      <Products category={category} />
    </>
  );
}
