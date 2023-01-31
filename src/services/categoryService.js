const { Category } = require('../models');

const create = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const getAllCategories = async (name) => {
    const category = await Category.findAll({ name });
    return category;
  };

module.exports = {
    create,
    getAllCategories,
};