import { atom } from 'recoil';

const userUid = atom<string>({
  key: 'user.uid',
  default: '',
});

export const userAtoms = { userUid };
