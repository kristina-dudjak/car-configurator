export interface CarItem {
  id: string;
  name: string;
  thumbnail: string;
}
export interface Car {
  url: string;
  name: string;
  year: number;
  colors: CarItem[];
  wheels: CarItem[];
  interiors: CarItem[];
}
