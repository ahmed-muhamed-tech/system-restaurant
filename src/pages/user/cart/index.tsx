import { useCartQuery } from "./hooks/useCartQuery";
import CartItems from "./components/CartItems";
import Error from "@/components/ui/Error";
import CartPageLoading from "./components/CartPageLoading";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
  // fetch ALL content of cart
  const { data, isPending: isLoadingCartContent, isError } = useCartQuery();

  if (isError) return <Error />;

  if (isLoadingCartContent) {
    return isLoadingCartContent && <CartPageLoading />;
  }

  // totalPriceOfItems
  const cartSubtotal = data?.data?.subtotal ?? 0;
  const { itemCount, items } = data?.data ?? { itemCount: 0, items: [] };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 w-full lg:h-screen lg:overflow-hidden  lg:pl-5">
      <CartItems itemCount={itemCount} items={items} />

      <OrderSummary cartSubtotal={cartSubtotal} />
    </div>
  );
}
