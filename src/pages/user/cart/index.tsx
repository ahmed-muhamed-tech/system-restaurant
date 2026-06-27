import { useCartQuery } from "./hooks/useCartQuery";
import CardPrices from "./components/CardPrices";
import CartItems from "./components/CartItems";

export default function Cart() {
  const { data, isPending, isError } = useCartQuery();

  const totalPriceItems = data?.data?.subtotal ?? 0;

  if (isPending) return;
  if (isError) return;
  const { itemCount, items } = data?.data;

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 w-full lg:h-screen lg:overflow-hidden  lg:pl-5">
      {/* Products */}
      <CartItems itemCount={itemCount} items={items} />

      <CardPrices cartSubtotal={totalPriceItems} />
    </div>
  );
}
