/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openConn = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurant = {
  async getRestaurant(id) {
    if (!id) return;
    return (await openConn).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurants() {
    return (await openConn).getAll(OBJECT_STORE_NAME);
  },
  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) return;
    return (await openConn).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant(id) {
    return (await openConn).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurant;
