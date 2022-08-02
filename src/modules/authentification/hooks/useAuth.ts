import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { authAtoms, useDb } from 'modules';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { auth } from '../../../firebase';

export const useAuth = () => {
  const [uid, setUid] = useRecoilState(authAtoms.userUid);
  const setErrorMessage = useSetRecoilState(authAtoms.authError);
  const setName = useSetRecoilState(authAtoms.userName);
  const setEmail = useSetRecoilState(authAtoms.userEmail);
  const rememberUser = useRecoilValue(authAtoms.userRemember);
  const db = useDb();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setErrorMessage('');
      } else {
        setUid('');
      }
    });
  }, [uid]);

  const createAccount = async (
    email: string,
    password: string,
    name: string,
  ) => {
    if (!rememberUser) setPersistence(auth, browserSessionPersistence);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(userCredential.user, {
          displayName: name,
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        setUid(userCredential.user.uid);
        setEmail(email);
        setName(name);
        db.saveUser(userCredential.user);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const googleSignIn = () => {
    if (!rememberUser) setPersistence(auth, browserSessionPersistence);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user.email && user.displayName) {
          setUid(user.uid);
          db.saveUser(user);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  async function signIn(name: string, password: string) {
    if (!rememberUser) setPersistence(auth, browserSessionPersistence);
    const email = await db.getUserEmail(name);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUid(userCredential.user.uid);
        setEmail(email);
        setName(name);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  const signout = () => {
    signOut(auth)
      .then(() => {
        setUid('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email).catch((error) => {
      setErrorMessage(error.message);
    });
  };

  return {
    createAccount,
    signIn,
    googleSignIn,
    signout,
    resetPassword,
  };
};
