import { onNavigate } from '../../main.js';

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

  logo.src = 'src/imgs/logo.png';
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

  divInputs.append(boxEmail, boxPassword, loginButton);

  pAccount.textContent = ' Do not you have an account yet? Please,  ';
  pAccount.setAttribute('id', 'pAccount');
  signUpButton.textContent = 'Sign up here ';
  divAccount.append(pAccount, signUpButton);
  divAccount.setAttribute('id', 'divAccount');
  signUpButton.setAttribute('id', 'signUpButton');
  sectionOr.src = 'src/imgs/sectionOr.png';
  loginTwitter.src = 'src/imgs/loginTwitter.png';
  loginTwitter.setAttribute('class', 'loginIcon');
  loginGitHub.src = 'src/imgs/loginGithub.png';
  loginGitHub.setAttribute('class', 'loginIcon');
  loginGoogle.src = 'src/imgs/loginGoogle.png';
  loginGoogle.setAttribute('class', 'loginIcon');
  footer.textContent = '2022';

  logo.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/');
  });

  loginButton.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/home');
  });

  signUpButton.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/signUp');
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
