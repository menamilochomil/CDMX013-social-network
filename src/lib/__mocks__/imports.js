/* eslint-disable max-classes-per-file */
export const getAuth = () => jest.fn();

export const createUserWithEmailAndPassword = () => jest.fn();
export const initializeApp = () => jest.fn();
export const getFirestore = () => jest.fn();
export const collection = () => jest.fn();
export const query = () => jest.fn();
export const orderBy = () => jest.fn();
export const onSnapshot = () => jest.fn();

// github
export class GithubAuthProvider {
  constructor() {
    this.name = 'github';
  }
}

export class GoogleAuthProvider {
  constructor() {
    this.name = 'google';
  }
}

export const githubLogin = () => jest.fn();
