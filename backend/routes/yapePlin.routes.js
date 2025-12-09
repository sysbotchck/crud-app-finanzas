const express = require('express');
const router = express.Router();
const YapePlin = require('../models/YapePlin');

// Get all Yape/Plin transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await YapePlin.find().sort({ date: -1 });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one transaction
router.get('/:id', async (req, res) => {
    try {
        const transaction = await YapePlin.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'No encontrado' });
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create transaction
router.post('/', async (req, res) => {
    const transaction = new YapePlin({
        type: req.body.type,
        description: req.body.description,
        amount: req.body.amount,
        transactionType: req.body.transactionType,
        date: req.body.date,
        recipient: req.body.recipient
    });

    try {
        const newTransaction = await transaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update transaction
router.put('/:id', async (req, res) => {
    try {
        const transaction = await YapePlin.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'No encontrado' });

        if (req.body.type != null) transaction.type = req.body.type;
        if (req.body.description != null) transaction.description = req.body.description;
        if (req.body.amount != null) transaction.amount = req.body.amount;
        if (req.body.transactionType != null) transaction.transactionType = req.body.transactionType;
        if (req.body.date != null) transaction.date = req.body.date;
        if (req.body.recipient != null) transaction.recipient = req.body.recipient;

        const updatedTransaction = await transaction.save();
        res.json(updatedTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete transaction
router.delete('/:id', async (req, res) => {
    try {
        const transaction = await YapePlin.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'No encontrado' });

        await transaction.deleteOne();
        res.json({ message: 'Transacción eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
