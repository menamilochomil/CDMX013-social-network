import { onNavigate } from '../../main.js';

export const signUp = () => {
  const divContainer = document.createElement('div');
  const logo = document.createElement('img');
  const divInputs = document.createElement('div');
  const p = document.createElement('p');
  const labelEmail = document.createElement('label');
  const labelPassword = document.createElement('label');
  const labelConfirm = document.createElement('label');
  const boxEmail = document.createElement('input');
  const boxPassword = document.createElement('input');
  const boxConfirmPassword = document.createElement('input');
  const signUpButton = document.createElement('button');
  const pMessage = document.createElement('p');
  const sectionOr = document.createElement('img');
  const signUpTwitter = document.createElement('img');
  const signUpGitHub = document.createElement('img');
  const signUpGoogle = document.createElement('img');
  const footer = document.createElement('footer');

  logo.src = 'src/imgs/logo.png';
  logo.classList.add('logoTech');
  divInputs.setAttribute('class', 'containerInputs');
  p.textContent = 'Sing up';
  p.setAttribute('id', 'text');
  labelEmail.textContent = 'E-mail:';
  labelEmail.setAttribute('class', 'nameslabel');
  labelPassword.textContent = 'Password:';
  labelPassword.setAttribute('class', 'nameslabel');
  labelConfirm.textContent = 'Confirm your password:';
  labelConfirm.setAttribute('class', 'nameslabel');
  boxEmail.setAttribute('type', 'email');
  boxEmail.placeholder = 'email@something.com';
  boxEmail.setAttribute('class', 'inputs');
  boxPassword.setAttribute('type', 'password');
  boxPassword.placeholder = 'password';
  boxPassword.setAttribute('class', 'inputs');
  boxConfirmPassword.setAttribute('type', 'password');
  boxConfirmPassword.placeholder = 'Confirm your password';
  boxConfirmPassword.setAttribute('class', 'inputs');
  pMessage.textContent = ' By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy.';
  pMessage.setAttribute('id', 'pMessage');
  signUpButton.textContent = 'Sign Up';
  signUpButton.setAttribute('class', 'purpleButton');

  divInputs.append(labelEmail, boxEmail, labelPassword, boxPassword, labelConfirm, boxConfirmPassword, signUpButton, pMessage);

  sectionOr.src = 'src/imgs/sectionOr.png';
  signUpTwitter.src = 'src/imgs/twitter.png';
  signUpTwitter.setAttribute('class', 'signUpIcon');
  signUpGitHub.src = 'src/imgs/github.png';
  signUpGitHub.setAttribute('class', 'signUpIcon');
  signUpGoogle.src = 'src/imgs/google.png';
  signUpGoogle.setAttribute('class', 'signUpIcon');
  footer.textContent = '2022';

  signUpButton.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/login');
  });

  logo.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/');
  });

  divContainer.append(
    logo,
    p,
    divInputs,
    footer,
    sectionOr,
    signUpTwitter,
    signUpGitHub,
    signUpGoogle,
  );

  divContainer.setAttribute('class', 'container');

  return divContainer;
};
