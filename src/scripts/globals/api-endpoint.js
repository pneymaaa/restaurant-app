import CONFIG from './config';

const API_ENDPOINT = {
  GET_LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  GET_DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (queryString) => `${CONFIG.BASE_URL}/search?q=${queryString}`,
  ADD_RESTAURANT: `${CONFIG.BASE_URL}/review`,
  GET_SMALL_PICTURE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/small/${pictureId}`,
  GET_MEDIUM_PICTURE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/medium/${pictureId}`,
  GET_LARGE_PICTURE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/large/${pictureId}`,
};

export default API_ENDPOINT;
