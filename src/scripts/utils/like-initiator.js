import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template';

const LikeInitiatior = {
  async init({ likeContainer, restaurant, favoriteRestaurant }) {
    this._likeButtonContainer = likeContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

    await this._render();
  },
  async _render() {
    const { id } = this._restaurant;

    if (await this._isExist(id)) {
      this._Unlike();
    } else {
      this._Like();
    }
  },
  async _isExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },
  _Like() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#like-btn');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._render();
    });
  },
  _Unlike() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#like-btn');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._render();
    });
  },
};

export default LikeInitiatior;
