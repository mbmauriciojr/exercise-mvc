const axios = require('axios');

const URL = 'https://api.chucknorris.io/jokes/random';

const getRandomJoke = async () => {
  return (await axios(URL)).data.value;
};

module.exports = {
  getRandomJoke,
};
