import { onNavigate } from '../../main.js';

export const start = () => {
  const divContainer = document.createElement('div');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const logo = document.createElement('img');
  const loginButton = document.createElement('button');
  const signUpButton = document.createElement('button');
  const slogan = document.createElement('p');
  const imgWomenInTech = document.createElement('img');
  const footer = document.createElement('footer');

  logo.src = 'src/imgs/logo.png';
  loginButton.textContent = 'Login';
  signUpButton.textContent = 'Sign Up';
  slogan.textContent = 'Empowering Women in Technology';
  imgWomenInTech.src = 'src/imgs/imageTech.png';
  footer.textContent = '2022';

  divContainer.setAttribute('class', 'container');
  header.setAttribute('class', 'header');
  main.setAttribute('class', 'main');
  logo.setAttribute('id', 'logo');
  loginButton.setAttribute('id', 'login-btn');
  signUpButton.setAttribute('id', 'sign-up-btn');
  loginButton.setAttribute('class', 'btns');
  signUpButton.setAttribute('class', 'btns');
  slogan.setAttribute('id', 'slogan');
  imgWomenInTech.setAttribute('id', 'women-tech');

  header.append(logo);
  main.append(imgWomenInTech, slogan, loginButton, signUpButton);
  loginButton.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/login');
  });

  signUpButton.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/signUp');
  });

  divContainer.append(header, main, footer);

  return divContainer;
};
