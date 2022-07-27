import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userAtoms } from 'shared/state';
import { auth } from '../../firebase';

export const useAuth = () => {
  const [uid, setUid] = useRecoilState(userAtoms.userUid);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid('');
      }
    });
  }, [uid]);

  const createAccount = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUid(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        if (user.email && user.displayName) {
          setUid(user.uid);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  };

  const signout = () => {
    signOut(auth)
      .then(() => {
        setUid('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('sent');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return {
    createAccount,
    googleSignIn,
    signout,
    resetPassword,
  };
};
