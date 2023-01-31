const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const { authenticateToken } = require('../middleware/validateToken');

const router = Router();

router.post('/', authenticateToken, categoryController.create);
router.get('/', authenticateToken, categoryController.getAllCategories);

module.exports = router;