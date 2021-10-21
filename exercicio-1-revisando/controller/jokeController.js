const Joke = require('../model/joke');

const listJokes = async (_req, res) =>{
  const joke = await Joke.getJokes;

  res.status(200).render('/jokeView', { joke })
};

module.exports = {
  listJokes,
};
