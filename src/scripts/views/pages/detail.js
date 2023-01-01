import FavoriteRestaurant from '../../data/fav-restaurant';
import Restaurants from '../../data/restaurants';
import LikeInitiatior from '../../utils/like-initiator';
import {
  createDetailMenusTemplate,
  createDetailReviewsTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
} from '../templates/template';

const Detail = {
  render: async () => `    
    <div class="post-detail">
    </div>`,

  afterRender: async () => {
    const id = window.location.hash.split('/')[2];
    const restaurant = await Restaurants.detailRestaurant(id);
    const container = document.querySelector('.post-detail');
    container.innerHTML = createDetailTemplate(restaurant);

    const likeBtnContainer = document.querySelector('.post-item-like-btn');

    likeBtnContainer.innerHTML = createLikeButtonTemplate();

    const menusFood = restaurant.menus.foods;
    const menusDrink = restaurant.menus.drinks;
    const menuFood = document.querySelector('.post-detail-item-menu-foods');
    const menuDrink = document.querySelector('.post-detail-item-menu-drinks');

    const customersReviews = restaurant.customerReviews;
    const customerReview = document.querySelector('.post-detail-item-customer-review');

    menusFood.forEach((menu) => {
      menuFood.innerHTML += createDetailMenusTemplate(menu);
    });

    menusDrink.forEach((menu) => {
      menuDrink.innerHTML += createDetailMenusTemplate(menu);
    });

    customersReviews.forEach((review) => {
      customerReview.innerHTML += createDetailReviewsTemplate(review);
    });

    LikeInitiatior.init({
      likeContainer: document.querySelector('.post-item-like-btn'),
      favoriteRestaurant: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        city: restaurant.city,
        name: restaurant.name,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
