/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/fav-restaurant';
// import LikeInitiatior from '../src/scripts/utils/like-initiator';
import * as TestFactories from './helpers/testFactories';

describe('Unlike the restaurant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = '<div class="post-item-like-btn"></div>';
  };

  beforeEach(async () => {
    likeButtonContainer();
    await FavoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should appear the unlike button when the restaurant has been liked', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not appear the like button when the restaurant has been liked', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able remove all liked restaurants ', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    expect(restaurants).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestaurant.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    expect(restaurants).toEqual([]);
  });
});
