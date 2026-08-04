import Memberships from "@/pages/user/home/components/Memberships";
import Offers from "@/pages/user/home/components/Offers";
import ProductsContainer from "@/pages/user/home/components/ProductsContainer";
import Search from "@/pages/user/home/components/Search";

export default function Home() {
  return (
    <div className="p-2 lg:p-4">
      {/* search */}
      <Search />

      {/* discount */}
      <Offers />

      {/* Products & Categories*/}
      <ProductsContainer />

      {/* Membership */}
      <Memberships />
    </div>
  );
}
