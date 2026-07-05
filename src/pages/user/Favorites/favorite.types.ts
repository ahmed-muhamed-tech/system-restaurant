type Image = {
  url: string;
};
export type MenuItem = {
  id: string;
  images: Image[];
  name: string;
  description: string;
  rating: number;
};

export type FavoriteStore = {
  count: number;
  inc: () => void;
  dec: () => void;
};
