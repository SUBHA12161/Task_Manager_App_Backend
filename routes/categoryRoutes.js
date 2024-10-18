const express = require('express');
const { createCategory, deleteCategory } = require('../controllers/categoryController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, createCategory);      
router.delete('/:id', authenticate, deleteCategory); 

module.exports = router;