const Joke = require('../model/Joke');

const listJokes = async (_req, res) =>{
  const joke = await Joke.getRandomJoke();

  res.status(200).render('jokes/joke', { joke });
};

const listJokeByCategorie = async (req, res) => {
  const category = req.params;

  const joke = await Joke.getJokeByCategorie(category);

  res.status(200).render('jokes/joke', { joke });
};

module.exports = {
  listJokes,
  listJokeByCategorie,
};
