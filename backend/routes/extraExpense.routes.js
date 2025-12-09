const express = require('express');
const router = express.Router();
const ExtraExpense = require('../models/ExtraExpense');

// Get all extra expenses
router.get('/', async (req, res) => {
    try {
        const extraExpenses = await ExtraExpense.find().sort({ date: -1 });
        res.json(extraExpenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one extra expense
router.get('/:id', async (req, res) => {
    try {
        const extraExpense = await ExtraExpense.findById(req.params.id);
        if (!extraExpense) return res.status(404).json({ message: 'No encontrado' });
        res.json(extraExpense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create extra expense
router.post('/', async (req, res) => {
    const extraExpense = new ExtraExpense({
        description: req.body.description,
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date
    });

    try {
        const newExtraExpense = await extraExpense.save();
        res.status(201).json(newExtraExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update extra expense
router.put('/:id', async (req, res) => {
    try {
        const extraExpense = await ExtraExpense.findById(req.params.id);
        if (!extraExpense) return res.status(404).json({ message: 'No encontrado' });

        if (req.body.description != null) extraExpense.description = req.body.description;
        if (req.body.amount != null) extraExpense.amount = req.body.amount;
        if (req.body.category != null) extraExpense.category = req.body.category;
        if (req.body.date != null) extraExpense.date = req.body.date;

        const updatedExtraExpense = await extraExpense.save();
        res.json(updatedExtraExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete extra expense
router.delete('/:id', async (req, res) => {
    try {
        const extraExpense = await ExtraExpense.findById(req.params.id);
        if (!extraExpense) return res.status(404).json({ message: 'No encontrado' });

        await extraExpense.deleteOne();
        res.json({ message: 'Gasto extra eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
