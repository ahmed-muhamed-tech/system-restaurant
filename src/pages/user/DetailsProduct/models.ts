type Image = {
  id: string;
  url: string;
};

type Category = {
  name: string;
  slug: string;
};

type Addons = {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
};

export type Sizes = {
  id: string;
  isAvailable: boolean;
  label: string;
  price: number;
};

export type CurrentProduct = {
  id: string;
  images: Image[];
  isAvailable: boolean;
  name: string;
  hasDiscount: boolean;
  rating: number;
  description: string;
  category: Category;
  addons: Addons[];
  sizes: Sizes[];
  discountPercentage: number | null;
};

export type ProductCart = {
  menuItemId: string;
  sizeId: string;
  addonIds: string[];
  quantity: number;
  note: string;
};

export type UseAddProductProps = {
  currentProduct: CurrentProduct;
  sizeId: string;
  addonIds: string[];
  quantity: number;
  note: string;
  reset: () => void;
};