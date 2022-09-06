// Este es el punto de entrada de tu aplicacion
import { start } from './src/components/start.js';
import { login } from './src/components/login.js';
import { signUp } from './src/components/sign-up.js';
import { home } from './src/components/home.js';

const root = document.getElementById('root');

const routes = {
  '/CDMX013-social-network/': start,
  '/CDMX013-social-network/login': login,
  '/CDMX013-social-network/signUp': signUp,
  '/CDMX013-social-network/home': home,
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

const path = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(path());
};

root.appendChild(path());
