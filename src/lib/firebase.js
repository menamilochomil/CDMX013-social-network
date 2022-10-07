/* eslint-disable import/no-unresolved */
import {
  initializeApp, getAuth, getFirestore, collection, addDoc, getDoc, onSnapshot, serverTimestamp, query, orderBy, doc, deleteDoc, updateDoc, arrayUnion, arrayRemove,
} from './imports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAP7rv-LIMUMVmMreOEmYNlxC9pSjGKf4g',
  authDomain: 'women-in-tech-a2721.firebaseapp.com',
  projectId: 'women-in-tech-a2721',
  storageBucket: 'women-in-tech-a2721.appspot.com',
  messagingSenderId: '721813557906',
  appId: '1:721813557906:web:9c3fde9d14410a535ecc4b',
  measurementId: 'G-SQTMTQ0BMC',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// a new variable is created to store the post data collection
export const postsRef = collection(db, 'posts');

export const likes = [];

export const publish = (posts, user) => addDoc(postsRef, {
  likes, posts, user, timeOfPublication: serverTimestamp(),
});

// Adding query to order posts by time
const q = query(collection(db, 'posts'), orderBy('timeOfPublication', 'desc'));

export const onGetPost = (callback) => onSnapshot(q, callback);

// Con doc se elimina un solo dato. Recibe dos parámetros: la conexion a la base de datos y el ID.
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getSomething = (id) => getDoc(doc(db, 'posts', id));
// Like post
export const like = (id, email) => updateDoc(doc(db, 'posts', id), {
  likes: arrayUnion(email),
});

export const dislike = (id, email) => updateDoc(doc(db, 'posts', id), {
  likes: arrayRemove(email),
});
