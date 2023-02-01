const { Category, BlogPost, User } = require('../models');

const getAll = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { type: 200, message: post };
};

module.exports = {
  getAll,
};