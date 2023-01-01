/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/fav-restaurant';
// import LikeInitiatior from '../src/scripts/utils/like-initiator';
import * as TestFactories from './helpers/testFactories';

describe('Like the restaurant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = '<div class="post-item-like-btn"></div>';
  };

  beforeEach(() => {
    likeButtonContainer();
  });

  it('should appear the like button', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not appear the like button', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should appear the like button when the restaurant has not been like before', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('#like-btn').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurant.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add the restaurant when its already liked', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestaurant.putRestaurant({ id: 1 });

    document.querySelector('.post-item-like-btn').dispatchEvent(new Event('click'));

    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    expect(restaurants).toEqual([{ id: 1 }]);

    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add the restaurant when it has no id', async () => {
    await TestFactories.LikeButtonInitiatorWithRestaurant({});

    // await FavoriteRestaurant.putRestaurant({ id: 1 });

    document.querySelector('#like-btn').dispatchEvent(new Event('click'));

    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    expect(restaurants).toEqual([]);

    // FavoriteRestaurant.deleteRestaurant(1);
  });
});
