const express = require('express');
const router = express.Router();
const Salary = require('../models/Salary');

// Get current salary
router.get('/', async (req, res) => {
    try {
        const salary = await Salary.findOne().sort({ updatedAt: -1 });
        res.json(salary || { amount: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create or update salary
router.post('/', async (req, res) => {
    try {
        const salary = new Salary({
            amount: req.body.amount
        });
        const newSalary = await salary.save();
        res.status(201).json(newSalary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update salary
router.put('/:id', async (req, res) => {
    try {
        const salary = await Salary.findById(req.params.id);
        if (req.body.amount != null) {
            salary.amount = req.body.amount;
            salary.updatedAt = Date.now();
        }
        const updatedSalary = await salary.save();
        res.json(updatedSalary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
