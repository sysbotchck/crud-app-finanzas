const express = require('express');
const router = express.Router();
const Income = require('../models/Income');

// Get all incomes
router.get('/', async (req, res) => {
    try {
        const incomes = await Income.find().sort({ date: -1 });
        res.json(incomes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one income
router.get('/:id', async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        if (!income) return res.status(404).json({ message: 'No encontrado' });
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create income
router.post('/', async (req, res) => {
    const income = new Income({
        description: req.body.description,
        amount: req.body.amount,
        date: req.body.date,
        category: req.body.category
    });

    try {
        const newIncome = await income.save();
        res.status(201).json(newIncome);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update income
router.put('/:id', async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        if (!income) return res.status(404).json({ message: 'No encontrado' });

        if (req.body.description != null) income.description = req.body.description;
        if (req.body.amount != null) income.amount = req.body.amount;
        if (req.body.date != null) income.date = req.body.date;
        if (req.body.category != null) income.category = req.body.category;

        const updatedIncome = await income.save();
        res.json(updatedIncome);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete income
router.delete('/:id', async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        if (!income) return res.status(404).json({ message: 'No encontrado' });

        await income.deleteOne();
        res.json({ message: 'Ingreso eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
