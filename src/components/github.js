/* eslint-disable import/no-unresolved */
import {
  getAuth, GithubAuthProvider, signInWithRedirect, getRedirectResult,
} from '../lib/imports.js';
import { app } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

export const githubLogin = () => {
  signInWithRedirect(auth, githubProvider);
  getRedirectResult(auth)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // const token = result.credential.accessToken;
        onNavigate('/home');
      }
      // const user = result.user;
    })
    .catch((err) => {
      console.log(err);
    });
};
