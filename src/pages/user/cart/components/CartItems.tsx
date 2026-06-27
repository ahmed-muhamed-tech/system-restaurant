
import type { CardResponse } from "../models";
import CartItemCard from "./CartItemCard";

export default function CartItems({itemCount, items}: {itemCount: number, items: CardResponse[]}) {

  return (
    <div className="lg:w-2/3 py-8 px-4 lg:overflow-y-auto mb-22 lg:mb-0">
        {/* Head */}
        <div className="flex gap-1 text-xl font-semibold items-center">
          <h2 className="text-gray-700 text-2xl lg:text-3xl">سله الطلبات</h2>
          <div className="text-white bg-primary w-8 h-8 rounded-full flex items-center justify-center font-black">
            <h2>{itemCount}</h2>
          </div>
        </div>

        {/* Products */}
        <div className="mt-8 flex flex-col gap-4 ">
          {items.length === 0 ? (
            <h3 className="text-2xl lg:text-4xl text-primary text-center bg-gray-100 border border-white rounded-2xl py-2 shadow-2xl shadow-gray-300">
              السله فارغه
            </h3>
          ) : (
            items.map(
              ({
                quantity,
                totalPrice,
                menuItem,
                unitPrice,
                addons,
                id,
                note
              }: CardResponse) => (
          
                <CartItemCard
                  key={id}
                  id={id}
                 note={note}
                  quantity={quantity}
                  addons={addons}
                  unitPrice={unitPrice}
                  totalPrice={totalPrice}
                  title={menuItem.name}
                  image={menuItem.images[0].url}
                />
              ),
            )
          )}
        </div>
      </div>
  )
}
