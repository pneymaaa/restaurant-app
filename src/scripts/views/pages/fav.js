import FavoriteRestaurant from '../../data/fav-restaurant';
import { createListRestaurantTemplate } from '../templates/template';

const Fav = {
  async render() {
    return `<article class="headline">
    <h1 class="headline-title">Favorite Restaurants</h1>
    </article>
    <div class="posts">
    </div>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const container = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      container.innerHTML += createListRestaurantTemplate(restaurant);
    });
  },
};

export default Fav;
