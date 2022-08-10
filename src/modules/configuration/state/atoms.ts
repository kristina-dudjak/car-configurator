import { Timestamp } from 'firebase/firestore';
import { Car, Configuration } from 'modules';
import { atom } from 'recoil';

const car = atom<Car>({
  key: 'car',
  default: {
    name: '',
    year: 0,
    url: '',
    price: 0,
    colors: [],
    wheels: [],
    interiors: [],
  },
});

const configuration = atom<Configuration>({
  key: 'configuration',
  default: {
    modelName: '',
    color: { id: '', name: '', thumbnail: '', price: 0 },
    wheel: { id: '', name: '', thumbnail: '', price: 0 },
    interior: { id: '', name: '', thumbnail: '', price: 0 },
    price: 0,
    year: 0,
    creationDate: Timestamp.fromMillis(0),
  },
});

export const carAtoms = {
  car,
  configuration,
};
