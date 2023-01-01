import API_ENDPOINT from '../globals/api-endpoint';

class Restaurants {
  static async listRestaurants() {
    const res = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
    const data = await res.json();
    return data.restaurants;
  }

  static async detailRestaurant(id) {
    const res = await fetch(API_ENDPOINT.GET_DETAIL_RESTAURANT(id));
    const data = await res.json();
    return data.restaurant;
  }

  static async searchRestaurant(queryString) {
    const res = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(queryString));
    const data = await res.json();
    return data;
  }

  static async addRestaurant(config) {
    const res = await fetch(API_ENDPOINT.ADD_RESTAURANT, config);
    const data = await res.json();
    return data;
  }

  // static async getSmallImage(pictureId) {
  //   const res = await fetch(API_ENDPOINT.GET_SMALL_PICTURE(pictureId));
  //   const data = await res.json();
  //   return data;
  // }

  // static async getMediumImage(pictureId) {
  //   const res = await fetch(API_ENDPOINT.GET_MEDIUM_PICTURE(pictureId));
  //   const data = await res.json();
  //   return data;
  // }

  // static async getLargeImage(pictureId) {
  //   const res = await fetch(API_ENDPOINT.GET_LARGE_PICTURE(pictureId));
  //   const data = await res.json();
  //   return data;
  // }
}

export default Restaurants;
