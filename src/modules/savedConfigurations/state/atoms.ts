import { Timestamp } from 'firebase/firestore';
import { Configuration } from 'modules';
import { atom } from 'recoil';

const configurations = atom<Configuration[]>({
  key: 'configurations',
  default: [
    {
      name: '',
      color: { id: '', name: '', thumbnail: '', price: 0 },
      wheel: { id: '', name: '', thumbnail: '', price: 0 },
      interior: { id: '', name: '', thumbnail: '', price: 0 },
      price: 0,
      year: 0,
      creationDate: Timestamp.fromMillis(0),
    },
  ],
  dangerouslyAllowMutability: true,
});

export const configurationsAtoms = {
  configurations,
};
