const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Get all expenses
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ date: -1 });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one expense
router.get('/:id', async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: 'No encontrado' });
        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create expense
router.post('/', async (req, res) => {
    const expense = new Expense({
        description: req.body.description,
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date
    });

    try {
        const newExpense = await expense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update expense
router.put('/:id', async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: 'No encontrado' });

        if (req.body.description != null) expense.description = req.body.description;
        if (req.body.amount != null) expense.amount = req.body.amount;
        if (req.body.category != null) expense.category = req.body.category;
        if (req.body.date != null) expense.date = req.body.date;

        const updatedExpense = await expense.save();
        res.json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete expense
router.delete('/:id', async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: 'No encontrado' });

        await expense.deleteOne();
        res.json({ message: 'Gasto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
