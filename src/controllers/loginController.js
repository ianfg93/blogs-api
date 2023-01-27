const { loginService } = require('../services/index');

const userLogin = async (req, res) => {
  const { type, message } = await loginService.userLogin(req.body);

  if (type !== 200) return res.status(type).json({ message });

  return res.status(type).json(message);
};

const createLogin = async (req, res) => {
  const { type, message } = await loginService.createLogin(req.body);

  if (type !== 201) return res.status(type).json({ message });

  return res.status(type).json(message);
};

module.exports = {
  userLogin,
  createLogin,
};
