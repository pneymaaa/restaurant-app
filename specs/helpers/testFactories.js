import FavoriteRestaurant from '../../src/scripts/data/fav-restaurant';
import LikeInitiatior from '../../src/scripts/utils/like-initiator';

const LikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeInitiatior.init({
    likeContainer: document.querySelector('.post-item-like-btn'),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant,
  });
};

export { LikeButtonInitiatorWithRestaurant };
