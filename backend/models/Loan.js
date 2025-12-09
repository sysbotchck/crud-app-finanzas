const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    creditor: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    remainingAmount: {
        type: Number,
        required: true
    },
    interestRate: {
        type: Number,
        default: 0
    },
    monthlyPayment: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Loan', loanSchema);
