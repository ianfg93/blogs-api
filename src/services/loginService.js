const { User } = require('../models');
const JWT = require('../utils/JWT');

const userLogin = async ({ email, password }) => {
  const users = await User.findAll();
  const userValid = users.find((index) => index.email === email && index.password === password);
  if (!userValid) return { type: 400, message: 'Invalid fields' };

  const token = JWT.generateToken({ email });
  return { type: 200, message: { token } };
};

module.exports = {
  userLogin,
};