import { onNavigate } from '../main.js';
import { auth, logIn } from '../firebase/register.js';

export const login = () => {
  const divContainer = document.createElement('div');
  const logo = document.createElement('img');
  const divInputs = document.createElement('div');
  const p = document.createElement('p');
  const boxEmail = document.createElement('input');
  const boxPassword = document.createElement('input');
  const loginButton = document.createElement('button');
  const pAccount = document.createElement('p');
  const signUpButton = document.createElement('button');
  const divAccount = document.createElement('div');
  const sectionOr = document.createElement('img');
  const loginTwitter = document.createElement('img');
  const loginGitHub = document.createElement('img');
  const loginGoogle = document.createElement('img');
  const footer = document.createElement('footer');
  const para = document.createElement('p');

  logo.src = '../imgs/logo.png';
  logo.classList.add('logoTech');
  divInputs.setAttribute('class', 'containerInputs');
  p.textContent = 'Log in';
  p.setAttribute('class', 'text');
  boxEmail.setAttribute('type', 'email');
  boxEmail.placeholder = 'email@something.com';
  boxEmail.setAttribute('class', 'inputs');
  boxPassword.setAttribute('type', 'password');
  boxPassword.placeholder = 'password';
  boxPassword.setAttribute('class', 'inputs');
  loginButton.textContent = 'Log in';
  loginButton.setAttribute('class', 'purpleButton');
  para.setAttribute('class', 'errorMessage');

  divInputs.append(boxEmail, boxPassword, para, loginButton);

  pAccount.textContent = ' Do not you have an account yet? Please,  ';
  pAccount.setAttribute('id', 'pAccount');
  signUpButton.textContent = 'Sign up here ';
  divAccount.append(pAccount, signUpButton);
  divAccount.setAttribute('id', 'divAccount');
  signUpButton.setAttribute('id', 'signUpButton');
  sectionOr.src = '../imgs/sectionOr.png';
  loginTwitter.src = '../imgs/loginTwitter.png';
  loginTwitter.setAttribute('class', 'loginIcon');
  loginGitHub.src = '../imgs/loginGithub.png';
  loginGitHub.setAttribute('class', 'loginIcon');
  loginGoogle.src = '../imgs/loginGoogle.png';
  loginGoogle.setAttribute('class', 'loginIcon');
  footer.textContent = '2022';

  const firebaseLogIn = async () => {
    const loginEmail = boxEmail.value;
    const loginPassword = boxPassword.value;

    try {
      logIn(auth, loginEmail, loginPassword);
      onNavigate('/home');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        para.style.display = 'block';
        para.style.opacity = '1';
        para.innerHTML = 'You do not have an account yet';
      }
      if (error.code === 'auth/internal-error') {
        para.style.display = 'block';
        para.style.opacity = '1';
        para.innerHTML = 'Please, write your password';
      }
      if (error.code === 'auth/invalid-email') {
        para.style.display = 'block';
        para.style.opacity = '1';
        para.innerHTML = 'Your email is incorrect';
      }
      if (error.code === 'auth/wrong-password') {
        para.style.display = 'block';
        para.style.opacity = '1';
        para.innerHTML = 'Your password is incorrect';
      }
      if (error.code === 'auth/user-disabled') {
        para.style.display = 'block';
        para.style.opacity = '1';
        para.innerHTML = 'Your account is disabled';
      }
    }
  };

  loginButton.addEventListener('click', firebaseLogIn);

  logo.addEventListener('click', () => {
    onNavigate('/');
  });

  signUpButton.addEventListener('click', () => {
    onNavigate('/signUp');
  });

  divContainer.append(
    logo,
    p,
    divInputs,
    divAccount,
    footer,
  );

  divContainer.setAttribute('class', 'container');

  return divContainer;
};
