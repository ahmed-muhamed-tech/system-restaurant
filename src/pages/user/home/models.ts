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
}

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId:string;
  isAvailable: boolean;
  discountPercentage: number;
  hasDiscount: boolean;
  rating: number;
  createdAt: string;
  updatedAt: string;
  images: MenuItemImage[];
  size: string[];
  addons: Addons[]
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

export type MenuQeury = {
  data: MenuResponse | undefined;
  isError: boolean;
  isPending: boolean;
  error: any;
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
};

export type CategoryFilterProps = {
  setCategory: any;
  category: string;
};

