const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');

// Get all loans
router.get('/', async (req, res) => {
    try {
        const loans = await Loan.find().sort({ startDate: -1 });
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one loan
router.get('/:id', async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) return res.status(404).json({ message: 'No encontrado' });
        res.json(loan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create loan
router.post('/', async (req, res) => {
    const loan = new Loan({
        creditor: req.body.creditor,
        description: req.body.description,
        totalAmount: req.body.totalAmount,
        remainingAmount: req.body.remainingAmount,
        interestRate: req.body.interestRate,
        monthlyPayment: req.body.monthlyPayment,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        isPaid: req.body.isPaid
    });

    try {
        const newLoan = await loan.save();
        res.status(201).json(newLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update loan
router.put('/:id', async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) return res.status(404).json({ message: 'No encontrado' });

        if (req.body.creditor != null) loan.creditor = req.body.creditor;
        if (req.body.description != null) loan.description = req.body.description;
        if (req.body.totalAmount != null) loan.totalAmount = req.body.totalAmount;
        if (req.body.remainingAmount != null) loan.remainingAmount = req.body.remainingAmount;
        if (req.body.interestRate != null) loan.interestRate = req.body.interestRate;
        if (req.body.monthlyPayment != null) loan.monthlyPayment = req.body.monthlyPayment;
        if (req.body.startDate != null) loan.startDate = req.body.startDate;
        if (req.body.dueDate != null) loan.dueDate = req.body.dueDate;
        if (req.body.isPaid != null) loan.isPaid = req.body.isPaid;

        const updatedLoan = await loan.save();
        res.json(updatedLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete loan
router.delete('/:id', async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) return res.status(404).json({ message: 'No encontrado' });

        await loan.deleteOne();
        res.json({ message: 'Préstamo eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
