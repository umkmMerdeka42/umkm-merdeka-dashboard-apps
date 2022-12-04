import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  SESSION: `${BASE_URL}/session`,
  ALL_PRODUCT: `${BASE_URL}/products`,
  DETAIL_PRODUCT: (id) => `${BASE_URL}/products/${id}`,
  DELETE_PRODUCT: (id) => `${BASE_URL}/products/${id}`,
  USERS: `${BASE_URL}/users`,
  DETAIL_USERS: (id) => `${BASE_URL}/users/${id}`,
  DELETE_USERS: (id) => `${BASE_URL}/users/${id}`,
};

export default API_ENDPOINT;
