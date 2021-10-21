const express = require('express');

const categorieController = require('./controller/categorieController');
const jokeController = require('./controller/jokeController')

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.get('/categories', categorieController.listCategories);

app.get('/jokes', jokeController.listJokes);
app.get('/jokes/:categorie', jokeController.listJokeByCategorie);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${ PORT }`);
});

