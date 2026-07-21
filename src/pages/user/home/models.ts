type MenuItemImage = {
  id: string;
  menuItemId: string;
  url: string;
  publicId: string;
  order: number;
  createdAt: string;
};

type Addons = {
  createdAt: string;
  id: string;
  menuItemId: string;
  name: string;
  price: number;
  updatedAt: string;
};

type Size = {
  id: string;
  isAvailable: boolean;
  label: string;
  menuItemId: string;
  price: number;
  slug: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId: string;
  isAvailable: boolean;
  discountPercentage: number;
  hasDiscount: boolean;
  rating: number;
  createdAt: string;
  updatedAt: string;
  images: MenuItemImage[];
  sizes: Size[];
  addons: Addons[];
};

type PaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type MenuResponse = {
  data: MenuItem[];
  meta: PaginationMeta;
};

export type MenuQuery = {
  data: MenuResponse | undefined;
  isError: boolean;
  isPending: boolean;
  error: Error | null;
};

export type CategoryResponse = {
  id: string;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ButtonCategoryProps = {
  label: string;
  isActive: boolean;
};

export type CardProductProps = {
  index: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  images: MenuItemImage[];
  id: string;
  rating: number;
  hasDiscount: boolean;
  discountPercentage: number
};

export type CategoryFilterProps = {
  setCategory: (slug: string) => void;
  category: string;
};
