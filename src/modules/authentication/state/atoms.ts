import { atom } from 'recoil';

const userUid = atom<string>({
  key: 'auth.uid',
  default: '',
});

const userName = atom<string>({
  key: 'auth.name',
  default: '',
});

const userEmail = atom<string>({
  key: 'auth.email',
  default: '',
});

const userRemember = atom<boolean>({
  key: 'auth.remember',
  default: false,
});

const authError = atom<string>({
  key: 'auth.error',
  default: '',
});

export const authAtoms = {
  userUid,
  userName,
  userRemember,
  userEmail,
  authError,
};
