const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
    cardName: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CreditCard', creditCardSchema);
