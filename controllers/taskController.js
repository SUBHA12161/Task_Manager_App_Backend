const Task = require('../models/Task');
const Category = require('../models/Category');

// Create new task
exports.createTask = async (req, res) => {
    const { title, description, status, dueDate, category } = req.body;

    try {
        const categoryDoc = await Category.findOne({ name: category });

        if (!categoryDoc) {
            return res.status(400).json({ message: 'Invalid category' });
        }

        const task = new Task({
            title,
            description,
            status,
            dueDate,
            category: categoryDoc._id, 
            user: req.user.id
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.log("createTask err = ", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update task
exports.updateTask = async (req, res) => {
    const { title, description, status, dueDate, category } = req.body;

    try {
        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        task = await Task.findByIdAndUpdate(req.params.id, {
            title,
            description,
            status,
            dueDate,
            category
        }, { new: true });

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task removed' });
    } catch (error) {
        console.log("deleteTask err = ", error);
        res.status(500).json({ message: 'Server error' });
    }
};