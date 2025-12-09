const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Salary', salarySchema);
