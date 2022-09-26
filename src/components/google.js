import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from "../main.js";


export const googleAuth = async () => { 
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
  .then((result) => {
    onNavigate("/home");
    console.log("google sign in");
  })
  .catch(err => {
    console.log(err);
  })
}
