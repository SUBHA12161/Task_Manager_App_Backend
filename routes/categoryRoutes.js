const express = require('express');
const { createCategory, getCategory, deleteCategory } = require('../controllers/categoryController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, createCategory);
router.get('/', authenticate, getCategory);
router.delete('/:id', authenticate, deleteCategory);

module.exports = router;