type ProductImage = {
  url: string;
  id: string;
};

type MenuItem = {
  name: string;
  images: ProductImage[];
};

type Addon = {
  price: number;
  name: string;
};

export type CardResponse = {
  quantity: number;
  totalPrice: number;
  menuItem: MenuItem;
  addons: Addon[];
  id: string;
  unitPrice: number;
  note: string
};

export type CardProductProps = {
  image: string;
  title: string;
  addons?: Addon[];
  unitPrice: number;
  totalPrice: number;
  quantity: number;
  id: string;
  note: string
};

export type CartControlsProps = {
  quantity: number;
  id: string;
  totalPrice: number;
  title: string;
  unitPrice: number;
  note: string;
  
};

export type CartStore = {
  count: number;
  inc: () => void;
  dec: () => void;
  setCount: (newCount: number) => void;
};
