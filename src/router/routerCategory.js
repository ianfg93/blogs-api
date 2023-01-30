const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const { authenticateToken } = require('../middleware/validateToken');

const router = Router();

router.post('/categories', authenticateToken, categoryController.create);

module.exports = router;