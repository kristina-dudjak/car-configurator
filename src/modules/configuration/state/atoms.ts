import { Timestamp } from 'firebase/firestore';
import { Car, CarItem } from 'modules';
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
  dangerouslyAllowMutability: true,
});

const configurationCarName = atom<string>({
  key: 'configuration.carName',
  default: '',
});

const configurationCarPrice = atom<number>({
  key: 'configuration.carPrice',
  default: 0,
});

const configurationCarYear = atom<number>({
  key: 'configuration.carYear',
  default: 0,
});

const configurationCreationDate = atom<Timestamp>({
  key: 'configuration.creationDate',
  default: Timestamp.now(),
});

const configurationColor = atom<CarItem>({
  key: 'configuration.color',
  default: { id: '', name: '', thumbnail: '', price: 0 },
});

const configurationWheel = atom<CarItem>({
  key: 'configuration.wheel',
  default: { id: '', name: '', thumbnail: '', price: 0 },
});

const configurationInterior = atom<CarItem>({
  key: 'configuration.interior',
  default: { id: '', name: '', thumbnail: '', price: 0 },
});

export const carAtoms = {
  car,
};

export const configurationAtoms = {
  configurationCarName,
  configurationCarPrice,
  configurationCarYear,
  configurationColor,
  configurationWheel,
  configurationInterior,
  configurationCreationDate,
};
