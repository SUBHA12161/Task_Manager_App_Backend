const express = require('express');
const { createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createTask);      
router.put('/:id', authenticate, updateTask);    
router.delete('/:id', authenticate, deleteTask); 

module.exports = router;