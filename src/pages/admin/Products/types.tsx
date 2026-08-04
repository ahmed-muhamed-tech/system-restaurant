export type AddProductModalProps = { onClose: () => void };
export type ProductForm = {
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  hasDiscount: boolean;
  discountPercentage: number;
  images: File[],
};
