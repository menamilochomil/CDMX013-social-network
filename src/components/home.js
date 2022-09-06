import { onNavigate } from '../../main.js';

export const home = () => {
  const divContainer = document.createElement('div');
  const header = document.createElement('header');
  const logoHome = document.createElement('img');
  const profileImage = document.createElement('img');
  const logout = document.createElement('a');
  const commentContainer = document.createElement('section');
  const writeComment = document.createElement('textarea');
  const shareButton = document.createElement('button');
  const commentSharedContainer = document.createElement('section');
  const comment = document.createElement('p');

  logoHome.src = 'src/imgs/logo2.png';
  logoHome.setAttribute('id', 'logo-home');
  profileImage.src = 'src/imgs/profile.png';
  profileImage.setAttribute('class', 'profile');
  logout.textContent = 'Log out';
  writeComment.setAttribute('placeholder', 'Share something with the community...');
  shareButton.textContent = 'Share';

  header.append(logoHome, profileImage, logout);
  commentContainer.append(writeComment, shareButton);

  logout.addEventListener('click', function(){
    onNavigate('/CDMX013-social-network/');
  });

  shareButton.addEventListener('click', () => {
    commentSharedContainer.appendChild(comment.textContent = 'Hola!');
  });

  divContainer.append(header, commentContainer);
  return divContainer;
};
