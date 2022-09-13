import { onNavigate } from '../../main.js';

export const check = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'container');
  const button = document.createElement('button');
  button.setAttribute('id', 'loginButton');
  button.setAttribute('class', 'purpleButton');
  button.textContent = 'Log in';

  const container = `
    <p id="message">Your account has been created</p>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/> 
    </svg> 
    `;
  div.innerHTML = container;
  div.append(button);

  button.addEventListener('click', () => {
    onNavigate('/CDMX013-social-network/login');
  });
  return div;
};
