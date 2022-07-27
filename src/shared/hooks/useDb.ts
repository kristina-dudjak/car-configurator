import { db } from '../../firebase';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

export const useDb = () => {
  const saveUser = (uid: string, name: string, email: string) => {
    setDoc(
      doc(db, 'users', uid),
      {
        email: email,
        name: name,
      },
      { merge: true },
    );
  };

  async function getUserEmail(name: string) {
    const usersRef = collection(db, 'users');
    let email = '';
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      email = doc.data().email;
    });
    return email;
  }

  async function isTaken(name: string) {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    let taken = false;
    querySnapshot.forEach((doc) => {
      if (doc.data()) {
        taken = true;
      }
    });
    return taken;
  }

  return {
    saveUser,
    getUserEmail,
    isTaken,
  };
};
