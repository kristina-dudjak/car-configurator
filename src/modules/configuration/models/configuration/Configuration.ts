import { Timestamp } from 'firebase/firestore';
import { CarItem } from 'modules';

export interface Configuration {
  modelName: string;
  color: CarItem;
  wheel: CarItem;
  interior: CarItem;
  price: number;
  creationDate: Timestamp;
}
