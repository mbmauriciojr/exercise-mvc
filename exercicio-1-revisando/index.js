const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${ PORT }`);
});
