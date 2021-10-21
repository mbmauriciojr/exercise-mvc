const axios = require('axios');

const URL = 'https://api.chucknorris.io/jokes/categories';

const getCategories = async () => {
  return (await axios(URL)).data;
};

module.exports = {
  getCategories,
};
