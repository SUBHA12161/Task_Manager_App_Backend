const Category = require('../models/Category.js');
const mongoose = require('mongoose');

// Create new category
exports.createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const category = new Category({
            name,
            user: req.user.id
        });

        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.find({ user: req.user.id });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete category
exports.deleteCategory = async (req, res) => {
    try {
        let category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        if (category.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        await Category.findByIdAndDelete(req.params.id)
        res.json({ message: 'Category removed' });
    } catch (error) {
        console.log("deleteCategory err ==== ", error);
        res.status(500).json({ message: 'Server error' });
    }
};