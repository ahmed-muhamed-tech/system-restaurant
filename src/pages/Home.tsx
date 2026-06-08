import Search from "../components/Search";
import Offers from "../components/Offers";
import Memberships from "../components/Memberships";
import ProductsContainer from "../components/ProductsContainer";
export default function Home() {
  return (
    <div className="py-4">
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
