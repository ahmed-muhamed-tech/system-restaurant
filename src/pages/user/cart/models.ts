type Image = {
  url: string;
  id: string;
};

type MenuItems = {
  name: string;
  images: Image[];
};

type Addons = {
  price: number;
  name: string;
};

export type CardResponse = {
  quantity: number;
  totalPrice: number;
  menuItem: MenuItems;
  addons: Addons[];
  id: string;
  unitPrice: number;
  note: string
};

export type CardProductProps = {
  image: string;
  title: string;
  addons?: Addons[];
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
