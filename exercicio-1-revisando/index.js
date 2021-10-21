const express = require('express');
const jokeController = require('./controller/jokeController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.get('/', jokeController.listJokes);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${ PORT }`);
});
