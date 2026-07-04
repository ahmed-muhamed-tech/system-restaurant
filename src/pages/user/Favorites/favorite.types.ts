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