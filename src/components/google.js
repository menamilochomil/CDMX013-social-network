/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { GoogleAuthProvider, signInWithPopup, getAuth } from '../lib/imports.js';
import { onNavigate } from '../main.js';

export const googleAuth = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      onNavigate('/home');
      console.log('google sign in');
    })
    .catch((err) => {
      console.log(err);
    });
};
