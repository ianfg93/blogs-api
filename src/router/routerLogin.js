const { Router } = require('express');
const { validateLogin } = require('../middleware/validateLogin');
const loginController = require('../controllers/loginController');
const { authenticateToken } = require('../middleware/validateToken');

const router = Router();

router.post('/login', validateLogin, loginController.userLogin);
router.post('/user', loginController.createLogin);
router.get('/user', authenticateToken, loginController.getAllUsers);

module.exports = router;