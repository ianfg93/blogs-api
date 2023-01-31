const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await categoryService.create(name);
  console.log(newCategory);
  return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.getAllCategories(name);
  return res.status(200).json(category);
};

  module.exports = {
    create,
    getAllCategories,
};
