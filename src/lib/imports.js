/* eslint-disable import/no-unresolved */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';

export {
  getAuth, createUserWithEmailAndPassword, GithubAuthProvider, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
export {
  getFirestore, collection, addDoc, getDoc, onSnapshot, serverTimestamp, query, orderBy, doc, deleteDoc, updateDoc, arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
