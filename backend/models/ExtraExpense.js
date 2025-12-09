const mongoose = require('mongoose');

const extraExpenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Entretenimiento', 'Restaurantes', 'Compras', 'Hobbies', 'Viajes', 'Otros']
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ExtraExpense', extraExpenseSchema);
