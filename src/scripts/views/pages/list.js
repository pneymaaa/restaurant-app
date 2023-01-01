import Restaurants from '../../data/restaurants';
import { createListRestaurantTemplate } from '../templates/template';

const List = {
  async render() {
    return `<article class="headline">
    <h1 class="headline-title">Explore the Restaurant</h1>
    </article>
    <div class="posts">
    </div>`;
  },

  async afterRender() {
    const restaurants = await Restaurants.listRestaurants();
    const container = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      container.innerHTML += createListRestaurantTemplate(restaurant);
    });
  },
};

export default List;
