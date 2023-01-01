import FavoriteRestaurant from '../src/scripts/data/fav-restaurant';
import { itActsAsFavoriteRestaurantModel } from './contracts/favRestaurantContract';

describe('Favorite Restaurant Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurant);
});
