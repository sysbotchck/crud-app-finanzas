const mongoose = require('mongoose');

const yapePlinSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Yape', 'Plin']
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionType: {
        type: String,
        required: true,
        enum: ['Enviado', 'Recibido']
    },
    date: {
        type: Date,
        default: Date.now
    },
    recipient: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('YapePlin', yapePlinSchema);
