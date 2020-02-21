import axios from "axios";

export const URL_PREFIX = process.env.REACT_APP_IS_PROD ?
  process.env.REACT_APP_PROD_URL_PREFIX :
  "http://localhost:3500/api";

const apiBuilder = mainRouteName => ({
  fetchById: id => axios.get(`${URL_PREFIX}/${mainRouteName}/${id}`),

  fetchByPages: () => axios.get(`${URL_PREFIX}/${mainRouteName}?per_page=10&page=1`),

  fetchAll: () => axios.get(`${URL_PREFIX}/${mainRouteName}/all/items`),

  searchByIdAndGetByPages: id =>
    axios.get(`${URL_PREFIX}/${mainRouteName}?q=${id}&per_page=10&page=1`),
