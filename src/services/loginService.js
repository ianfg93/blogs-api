const { User } = require('../models');
const JWT = require('../utils/JWT');
const validation = require('../validation/validation');

const userLogin = async ({ email, password }) => {
  const users = await User.findAll();
  const userValid = users.find((index) => index.email === email && index.password === password);
  if (!userValid) return { type: 400, message: 'Invalid fields' };

  const token = JWT.generateToken({ email });
  return { type: 200, message: { token } };
};

const getAllUsers = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return user;
};

const createLogin = async (body) => {
  const error = validation.validateUser(body);
  if (error) return { type: 400, message: error };
  const { displayName, email, password, image } = body;

  const users = await User.findAll();
  const userValid = users.find((index) => index.email === email && index.password === password);
  if (userValid) return { type: 409, message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const token = JWT.generateToken({ displayName, email, password, image });
  return { type: 201, message: { token } };
};

module.exports = {
  userLogin,
  createLogin,
  getAllUsers,
};
