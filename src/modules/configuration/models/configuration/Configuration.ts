import { Timestamp } from 'firebase/firestore';
import { CarItem } from 'modules';

export interface Configuration {
  name: string;
  year: number;
  color: CarItem;
  wheel: CarItem;
  interior: CarItem;
  price: number;
  creationDate: Timestamp;
}
