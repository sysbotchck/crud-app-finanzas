const express = require('express');
const router = express.Router();
const Streaming = require('../models/Streaming');

// Get all streaming services
router.get('/', async (req, res) => {
    try {
        const streamingServices = await Streaming.find().sort({ serviceName: 1 });
        res.json(streamingServices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one streaming service
router.get('/:id', async (req, res) => {
    try {
        const streaming = await Streaming.findById(req.params.id);
        if (!streaming) return res.status(404).json({ message: 'No encontrado' });
        res.json(streaming);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create streaming service
router.post('/', async (req, res) => {
    const streaming = new Streaming({
        serviceName: req.body.serviceName,
        monthlyPrice: req.body.monthlyPrice,
        billingDate: req.body.billingDate,
        isActive: req.body.isActive,
        accountType: req.body.accountType,
        notes: req.body.notes
    });

    try {
        const newStreaming = await streaming.save();
        res.status(201).json(newStreaming);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update streaming service
router.put('/:id', async (req, res) => {
    try {
        const streaming = await Streaming.findById(req.params.id);
        if (!streaming) return res.status(404).json({ message: 'No encontrado' });

        if (req.body.serviceName != null) streaming.serviceName = req.body.serviceName;
        if (req.body.monthlyPrice != null) streaming.monthlyPrice = req.body.monthlyPrice;
        if (req.body.billingDate != null) streaming.billingDate = req.body.billingDate;
        if (req.body.isActive != null) streaming.isActive = req.body.isActive;
        if (req.body.accountType != null) streaming.accountType = req.body.accountType;
        if (req.body.notes != null) streaming.notes = req.body.notes;

        const updatedStreaming = await streaming.save();
        res.json(updatedStreaming);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete streaming service
router.delete('/:id', async (req, res) => {
    try {
        const streaming = await Streaming.findById(req.params.id);
        if (!streaming) return res.status(404).json({ message: 'No encontrado' });

        await streaming.deleteOne();
        res.json({ message: 'Servicio de streaming eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
