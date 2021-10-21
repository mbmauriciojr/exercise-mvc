const Categorie = require('../model/Categorie');

const listCategories = async (_req, res) =>{
  const categories = await Categorie.getCategories();

  res.status(200).render('categories/index', { categories })
};

const redirectCategories = async (_req, res) => {
  res.redirect('/categories');
};

module.exports = {
  listCategories,
  redirectCategories,
};
