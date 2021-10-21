const axios = require('axios');

const URL = 'https://api.chucknorris.io/jokes/random';

const getRandomJoke = async () => {
  return (await axios(URL)).data.value;
};

const getJokeByCategorie = async (category) => {
  return (await axios(`https://api.chucknorris.io/jokes/random?category=${category}`)).data.value;
}

module.exports = {
  getRandomJoke,
  getJokeByCategorie,
};
