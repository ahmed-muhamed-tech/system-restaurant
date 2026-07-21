export type CardResponse = {
  quantity: number;
  totalPrice: number;
  menuItem: MenuItem;
  addons: Addon[];
  id: string;
  unitPrice: number;
  note: string;
};

export type CardProductProps = {
  image: string;
  title: string;
  addons?: Addon[];
  unitPrice: number;
  totalPrice: number;
  quantity: number;
  id: string;
  note: string;
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

export interface CartResponse {
  data: {
    id: string;
    userId: string;
    itemCount: number;
    subtotal: number;
    createdAt: string;
    updatedAt: string;
    items: CartItem[];
  };
}

export interface CartItem {
  id: string;
  cartId: string;
  menuItemId: string;
  quantity: number;
  note: string | null;
  unitPrice: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  menuItem: MenuItem;
  size: Size;
  addons: Addon[];
}

export interface MenuItem {
  id: string;
  name: string;
  isAvailable: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
  order: number;
}

export interface Size {
  id: string;
  label: string;
  slug: string;
  price: number;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}
