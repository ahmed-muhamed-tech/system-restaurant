import { useState } from "react";

export default function useProductDetails(
  id: string,
  size: string,
  priceSize: number,
  hasDiscount: boolean,
  discountPercentage: number | null,
) {
  const [count, setCount] = useState(1);

  const [selectedSize, setSelectedSize] = useState<{
    id: string;
    label: string;
    price: number;
  }>({
    id: id,
    label: size,
    price: priceSize,
  });

  const [selectedAddons, setSelectedAddons] = useState<
    { id: string; name: string; price: number }[]
  >([]);

  const totalPriceAddons = selectedAddons?.reduce(
    (total, { price }) => total + price,
    0,
  );

  const handleCheckedAddons = (
    id: string,
    checked: boolean,
    name: string,
    price: number,
  ) => {
    checked
      ? setSelectedAddons((prev) => [...prev, { id, name, price }])
      : setSelectedAddons((prev) => prev.filter((addon) => addon.id !== id));
  };

  const handleAddSizes = (id: string, label: string, price: number) => {
    setSelectedSize({
      id,
      label,
      price
    });
    
  };


  const priceAfterDiscount =
    hasDiscount && discountPercentage
      ? selectedSize.price - (selectedSize.price * discountPercentage) / 100
      : selectedSize.price;

  const finalPrice = (priceAfterDiscount + totalPriceAddons) * count;

  return {
    setCount,
    count,
    selectedSize,
    finalPrice,
    handleAddSizes,
    selectedAddons,
    handleCheckedAddons,
    setSelectedSize,
    setSelectedAddons,
  };
}
