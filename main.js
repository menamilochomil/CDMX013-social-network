// Este es el punto de entrada de tu aplicacion
import { start } from './components/start.js';
import { login } from './components/login.js';
import { signUp } from './components/sign-up.js';
import { home } from './components/home.js';
import { check } from './components/successCreateAccount.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { auth } from '../lib/firebase.js';

const root = document.getElementById('root');

const routes = {
  '/CDMX013-social-network/': start,
  '/CDMX013-social-network/login': login,
  '/CDMX013-social-network/signUp': signUp,
  '/CDMX013-social-network/home': home,
  '/CDMX013-social-network/check': check,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/home')
    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const uid = user.uid;
  } else {
    onNavigate('/');
  }
});

const path = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(path());
};

root.appendChild(path());