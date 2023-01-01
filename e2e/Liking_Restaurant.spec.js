const assert = require('assert');

Feature('Liking Restaurant');

Scenario('like a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.post-item-title', 30); // secs

  const firstRestaurant = locate('.post-item-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  const firstreadMore = locate('a').withText('Read More...').first();
  I.click(firstreadMore);

  I.seeElement('#like-btn');
  I.click('#like-btn');

  I.amOnPage('/#/fav');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('cancel like a restaurant', async ({ I }) => {
  // pause();
  I.amOnPage('/#/fav');
  I.dontSeeElement('.post-item-title');

  I.amOnPage('/');
  I.waitForElement('.post-item-title', 30); // secs

  const firstRestaurant = locate('.post-item-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  const firstreadMore = locate('a').withText('Read More...').first();
  I.click(firstreadMore);

  I.seeElement('[aria-label="like this restaurant"]');
  I.click('[aria-label="like this restaurant"]');

  I.amOnPage('/#/fav');
  I.seeElement('.post-item-title');

  const firstRestaurantFav = locate('.post-item-title').first();
  const firstRestaurantTitleFav = await I.grabTextFrom(firstRestaurantFav);

  const firstreadMoreFav = locate('a').withText('Read More...').first();
  I.click(firstreadMoreFav);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/fav');
  I.dontSeeElement('.post-item-title');

  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleFav);
  assert.ok(true);
});
