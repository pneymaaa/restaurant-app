import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import swRegister from './utils/sw-register';
// import data from '../DATA.json';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.menu-logo'),
  content: document.querySelector('.content'),
  drawer: document.querySelector('nav'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
/*
const posts = document.querySelector('.posts');
const menuButton = document.querySelector('.menu-logo');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', (e) => {
  e.preventDefault();

  nav.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();

  posts.innerHTML = '';

  let postItem = '';
  data.restaurants.forEach((item) => {
    postItem
        += `<article class="post-item">
        <div class="post-item-header">
          <p class="post-item-city">
            ${item.city}
          </p>
          <img src="${item.pictureId}" alt="" class="post-item-img">
        </div>
        <div class="post-item-content">
          <p class="post-item-rating">
            Rating: ${item.rating}
          </p>
          <h1 class="post-item-title">
            ${item.name}
          </h1>
          <p class="post-item-description">
          ${item.description}
          </p>
        </div>
      </article>`;
  });

  posts.innerHTML = postItem;
});
*/
