const axios = require('axios');

const URL = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"';

const getJokes = async () => {
  const joke = await axios(URL);

  return joke.data.joke;
};

module.exports = {
  getJoke: getJokes,
};

// Outra maneira de retorno seria utilizar o (await axios(URL)).data.joke;