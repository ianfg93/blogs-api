const { Router } = require('express');
const { validateLogin } = require('../middleware/validateLogin');
const loginController = require('../controllers/loginController');

const router = Router();

router.post('/login', validateLogin, loginController.userLogin);
router.post('/user', loginController.createLogin);

module.exports = router;