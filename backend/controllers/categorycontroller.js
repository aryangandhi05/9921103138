const categories = require("./category");

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.getCategoryById = (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).send("Category not found.");
  res.json(category);
};
