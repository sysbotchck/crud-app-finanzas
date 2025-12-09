require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch((err) => console.error('❌ Error de conexión a MongoDB:', err));

// Routes
app.use('/api/salary', require('./routes/salary.routes'));
app.use('/api/income', require('./routes/income.routes'));
app.use('/api/expenses', require('./routes/expense.routes'));
app.use('/api/extra-expenses', require('./routes/extraExpense.routes'));
app.use('/api/credit-cards', require('./routes/creditCard.routes'));
app.use('/api/yape-plin', require('./routes/yapePlin.routes'));
app.use('/api/loans', require('./routes/loan.routes'));
app.use('/api/streaming', require('./routes/streaming.routes'));
app.use('/api/dashboard', require('./routes/dashboard.routes'));

// Health check
app.get('/', (req, res) => {
    res.json({
        message: 'API de Gestión Financiera',
        status: 'Activo',
        endpoints: [
            '/api/salary',
            '/api/income',
            '/api/expenses',
            '/api/extra-expenses',
            '/api/credit-cards',
            '/api/yape-plin',
            '/api/loans',
            '/api/streaming',
            '/api/dashboard'
        ]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
