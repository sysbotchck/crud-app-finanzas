const express = require('express');
const router = express.Router();
const CreditCard = require('../models/CreditCard');

// Get all credit card transactions
router.get('/', async (req, res) => {
    try {
        const creditCards = await CreditCard.find().sort({ date: -1 });
        res.json(creditCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one credit card transaction
router.get('/:id', async (req, res) => {
    try {
        const creditCard = await CreditCard.findById(req.params.id);
        if (!creditCard) return res.status(404).json({ message: 'No encontrado' });
        res.json(creditCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create credit card transaction
router.post('/', async (req, res) => {
    const creditCard = new CreditCard({
        cardName: req.body.cardName,
        bank: req.body.bank,
        description: req.body.description,
        amount: req.body.amount,
        date: req.body.date,
        isPaid: req.body.isPaid,
        dueDate: req.body.dueDate
    });

    try {
        const newCreditCard = await creditCard.save();
        res.status(201).json(newCreditCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update credit card transaction
router.put('/:id', async (req, res) => {
    try {
        const creditCard = await CreditCard.findById(req.params.id);
        if (!creditCard) return res.status(404).json({ message: 'No encontrado' });

        if (req.body.cardName != null) creditCard.cardName = req.body.cardName;
        if (req.body.bank != null) creditCard.bank = req.body.bank;
        if (req.body.description != null) creditCard.description = req.body.description;
        if (req.body.amount != null) creditCard.amount = req.body.amount;
        if (req.body.date != null) creditCard.date = req.body.date;
        if (req.body.isPaid != null) creditCard.isPaid = req.body.isPaid;
        if (req.body.dueDate != null) creditCard.dueDate = req.body.dueDate;

        const updatedCreditCard = await creditCard.save();
        res.json(updatedCreditCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete credit card transaction
router.delete('/:id', async (req, res) => {
    try {
        const creditCard = await CreditCard.findById(req.params.id);
        if (!creditCard) return res.status(404).json({ message: 'No encontrado' });

        await creditCard.deleteOne();
        res.json({ message: 'Transacción de tarjeta eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
