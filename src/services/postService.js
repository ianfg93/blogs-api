const { Category, BlogPost, User } = require('../models');

const getAllPost = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

module.exports = {
  getAllPost,
};