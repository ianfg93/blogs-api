const postService = require('../services/postService');

const getAllPost = async (_req, res) => {
  const post = await postService.getAllPost();
  res.status(200).json(post);
};

  module.exports = {
    getAllPost,
};
