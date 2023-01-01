import CONFIG from '../../globals/config';

const createListRestaurantTemplate = (restaurant) => `<article class="post-item">
<div class="post-item-header">
  <p class="post-item-city">
    ${restaurant.city}
  </p>
    <img data-sizes="auto" data-src="${`${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}`}" alt="${restaurant.name}" class="post-item-img lazyload">
</div>
<div class="post-item-content">
  <p class="post-item-rating">
    Rating: ${restaurant.rating}
  </p>
  <h1 class="post-item-title">
    ${restaurant.name}
  </h1>
  <p class="post-item-description">
  ${restaurant.description}
  </p>
</div>
<div class="post-item-footer">
  <a href="/#/detail/${restaurant.id}" class="btn">Read More...</a>
</div>
</article>`;

const createDetailTemplate = (restaurant) => `
<div class="post-detail-item-header">
  <div class="post-item-like-btn">
  </div>
  <img data-sizes="auto" data-src="${`${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}`}" alt="${restaurant.name}" class="post-detail-item-img lazyload"> 
</div>
<div class="post-detail-item-main-content">
  <p class="post-detail-item-rating">
    Rating: ${restaurant.rating}
  </p>
  <h1 class="post-detail-item-title">
    ${restaurant.name}
  </h1>
  <p class="post-detail-item-description">
  ${restaurant.description}
  </p>
  <p class="post-detail-item-address">
    ${restaurant.address} - ${restaurant.city}
  </p>
</div>
<div class="post-detail-item-main-content-1">
<div class="post-detail-item-foods">
  <p> Menu Makanan: </p>
  <ul class="post-detail-item-menu-foods">
  </ul>  
</div>
<div class="post-detail-item-drinks">
  <p> Menu Minuman: </p>
  <ul class="post-detail-item-menu-drinks">
  </ul>  
</div>
</div>
<div class="post-detail-item-main-content">
<div class="post-detail-item-reviews">
  <h2> Customer Reviews </h2>
  <div class="post-detail-item-customer-review">
  </div>  
</div>
</div>
<div class="post-item-footer">
    <a href="#home" class="btn back">Back</a>
</div>
`;

const createDetailMenusTemplate = (menu) => `<li>${menu.name}</li>`;

const createDetailReviewsTemplate = (review) => `
<div class="post-detail-item-review">
  <p><b>${review.name} - ${review.date}</b></p>
  <p><i>'${review.review}'</i></p>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="like-btn" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="like-btn" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// const createDetailMenuDrinksTemplate = (menu) => `<li>${menu.drink}</li>`;

export {
  createListRestaurantTemplate,
  createDetailTemplate,
  createDetailMenusTemplate,
  createDetailReviewsTemplate,
  createUnlikeButtonTemplate,
  createLikeButtonTemplate,
};
