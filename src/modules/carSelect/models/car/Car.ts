export interface CarItem {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
}
export interface Car {
  url: string;
  name: string;
  year: number;
  price: number;
  colors: CarItem[];
  wheels: CarItem[];
  interiors: CarItem[];
}
