import { useCartQuery } from "./hooks/useCartQuery";
import CardPrices from "./components/CardPrices";
import CartItems from "./components/CartItems";
import CartItemsLoading from "./components/CartItemsLoading";
import CardPricesLoading from "./components/CardPricesLoading";
import Error from "@/components/ui/Error";

export default function Cart() {
  // fetch ALL content of cart
  const { data, isPending: isLoadingCartContent, isError } = useCartQuery();

  if (isError) return <Error/>;

  if (isLoadingCartContent) {
    return (
      isLoadingCartContent && (
        <div className="animate-pulse flex flex-col-reverse lg:flex-row gap-5 w-full lg:h-screen lg:overflow-hidden lg:pl-5">
          <CartItemsLoading />

          <CardPricesLoading />
        </div>
      )
    );
  }

  // totalPriceOfItems
  const totalPriceItems = data?.data?.subtotal ?? 0;
  const { itemCount, items } = data?.data;

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 w-full lg:h-screen lg:overflow-hidden  lg:pl-5">
      <CartItems itemCount={itemCount} items={items} />

      <CardPrices cartSubtotal={totalPriceItems} />
    </div>
  );
}
