const { Router } = require('express');
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/validateToken');

const router = Router();

router.get('/', authenticateToken, postController.getAllPost);

module.exports = router;