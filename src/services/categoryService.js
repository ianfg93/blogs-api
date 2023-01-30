const { Category } = require('../models');

const create = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return { type: null, message: newCategory };
  } catch (erro) {
    return { type: 400, message: '"name" is required' };
  }
};

module.exports = {
    create,
};