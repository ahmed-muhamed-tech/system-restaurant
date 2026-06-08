import { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";


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
