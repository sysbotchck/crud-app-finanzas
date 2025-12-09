const mongoose = require('mongoose');

const streamingSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
        enum: ['Netflix', 'Disney+', 'HBO Max', 'Amazon Prime', 'Spotify', 'YouTube Premium', 'Apple TV+', 'Otros']
    },
    monthlyPrice: {
        type: Number,
        required: true
    },
    billingDate: {
        type: Number,
        required: true,
        min: 1,
        max: 31
    },
    isActive: {
        type: Boolean,
        default: true
    },
    accountType: {
        type: String,
        enum: ['Individual', 'Familiar', 'Compartida'],
        default: 'Individual'
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Streaming', streamingSchema);
