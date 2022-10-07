/* eslint-disable no-alert */
import {
  auth,
  publish,
  onGetPost,
  deletePost,
  like,
  dislike,
  getSomething,
} from '../lib/firebase.js';
import { signout } from './signOut.js';

export const home = () => {
  const divContainer = document.createElement('div');
  const header = document.createElement('header');
  const logoHome = document.createElement('img');
  const logout = document.createElement('button');
  const sectionContainer = document.createElement('section');
  const postForm = document.createElement('form');
  const nameUser = document.createElement('h1');
  const commentContainer = document.createElement('div');
  const writeComment = document.createElement('textarea');
  const charCounter = document.createElement('p');
  const errorCharacters = document.createElement('p');
  const shareButton = document.createElement('button');
  const comment = document.createElement('section');

  divContainer.setAttribute('id', 'body-home');
  header.setAttribute('id', 'header');
  logoHome.src = '../imgs/logo2.png';
  logoHome.setAttribute('id', 'logo-home');
  logout.textContent = 'Log out';
  logout.setAttribute('id', 'logout');
  sectionContainer.setAttribute('class', 'section-home');
  postForm.setAttribute('class', 'section-home');
  nameUser.setAttribute('id', 'name-user');
  commentContainer.setAttribute('id', 'comment-container');
  writeComment.setAttribute('id', 'post-container');
  writeComment.setAttribute(
    'placeholder',
    'Share something less than 500 characters with the community ...',
  );
  writeComment.setAttribute('maxlength', 500);
  charCounter.setAttribute('id', 'counter');
  shareButton.textContent = 'Share';
  shareButton.setAttribute('id', 'share');
  shareButton.disabled = true;

  header.append(logoHome, logout);
  commentContainer.appendChild(writeComment);
  postForm.append(nameUser, commentContainer, errorCharacters, shareButton);
  sectionContainer.append(postForm, comment);

  logout.addEventListener('click', () => {
    signout();
  });

  const userAuth = auth.currentUser;

  onGetPost((querySnapshot) => {
    const user = auth.currentUser;
    nameUser.textContent = `Welcome ${user.email} !`;
    let html = '';
    let htmlDelete = '';
    let htmlLike = '';
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      if (user.email === postData.user) {
        htmlDelete = `
          <i class="fa-sharp fa-solid fa-trash" data-id="${doc.id}"></i>`;
      } else {
        htmlDelete = '';
      }

      if (doc.data().likes.includes(user.email)) {
        htmlLike = `
        <i class="fa-solid fa-heart" data-id="${doc.id}"></i>
        `;
      } else {
        htmlLike = `
        <i class="fa-regular fa-heart" data-id="${doc.id}"></i>
        `;
      }
      let numberOflikes = '';
      if (doc.data().likes.length > 0) {
        numberOflikes = `<span>${doc.data().likes.length}</span>`;
      }
      html += `
          <article class="post-content">
          <div class= "container-header-post">
            <img id= "profile-home" src="../imgs/profile.png" alt="Profile Image">
            <h2 id ="header-post">${postData.user}</h2>
            <span id="delete-edit"> ${htmlDelete} </span>
          </div>
          <p class="post-user">${postData.posts}</p>
          <div class = "like-comment">
          <span class = "icon-container">
            ${htmlLike}
            <p>${numberOflikes} Like</p>
          </span>
          </div>
          </article>
          `;
    });
    comment.innerHTML = html;

    // Delete post
    const deteleTrash = comment.querySelectorAll('.fa-trash');

    deteleTrash.forEach((trash) => {
      trash.addEventListener('click', ({ target: { dataset } }) => {
        if (window.confirm('Do you really want to delete?')) {
          deletePost(dataset.id);
        }
      });
    });

    // Like post
    const likesIcons = comment.querySelectorAll('.fa-heart');

    likesIcons.forEach((item) => {
      item.addEventListener('click', async ({ target: { dataset } }) => {
        console.log(dataset.id);
        const doc = await getSomething(dataset.id);
        if (doc.data().likes.includes(user.email)) {
          dislike(dataset.id, user.email);
        } else {
          like(dataset.id, user.email);
        }
      });
    });
  });

  writeComment.addEventListener('input', (event) => {
    const { value } = event.target;
    if (value.length > 0) {
      charCounter.textContent = `${value.length}/500`;
      commentContainer.appendChild(charCounter);
    } else {
      charCounter.textContent = '';
    }
    if (value !== '') {
      shareButton.disabled = false;
    } else {
      shareButton.disabled = true;
    }
  });

  shareButton.addEventListener('click', (e) => {
    e.preventDefault();
    const postUser = postForm['post-container'];
    const userID = userAuth.email;
    publish(postUser.value, userID);
    postForm.reset();
    charCounter.textContent = '';
    shareButton.disabled = true;
  });

  divContainer.append(header, sectionContainer);
  return divContainer;
};
