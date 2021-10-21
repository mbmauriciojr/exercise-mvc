const Joke = require('../model/joke');

const listJokes = async (_req, res) =>{
  const jokes = await Joke.getJokes;

  // res.status(200).render()
};

module.exports = {
  listJokes,
};
