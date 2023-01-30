const categoryService = require('../services/categoryService');

const create = async (req, res) => {
    const { name } = req.body;
    const { type, message } = await categoryService.create(name);
    if (type) return res.status(type).json({ message });
};

  module.exports = {
    create,
};