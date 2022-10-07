/**
 * @jest-environment jsdom
 */
import { signUp } from '../src/components/sign-up';
// import { onNavigate } from '../src/main';

jest.mock('../src/lib/imports.js');
jest.mock('../src/main.js');

describe('The authentication of sign up', () => {
  test('this is a function', () => {
    expect(typeof signUp).toBe('function');
  });

  test('There exists an input email, password, confirm password', () => {
    const element = signUp();
    const inputs = element.querySelector('.inputs');
    expect(inputs).not.toBeNull();
  });

  test('It exists a sing up button', () => {
    const element = signUp();
    const btn = element.querySelector('#sign-up');
    expect(btn).not.toBeNull();
  });

  // test('It exists a sign up button', () => {
  //   const element = signUp();
  //   const email = element.querySelector('#email');
  //   const password = element.querySelector('#password');
  //   const btn = element.querySelector('#sign-up');
  //   const redirect = onNavigate('/check');
  //   email.value = 'example@gmail.com';
  //   password.value = '123456';
  //   btn.click();

  //   expect(redirect).not.toBeNull();
  // });

  test('Snapshot of sign up', () => {
    expect(signUp()).toMatchSnapshot();
  });
});
