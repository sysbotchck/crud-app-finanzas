const express = require('express');
const router = express.Router();
const Salary = require('../models/Salary');
const Income = require('../models/Income');
const Expense = require('../models/Expense');
const ExtraExpense = require('../models/ExtraExpense');
const CreditCard = require('../models/CreditCard');
const YapePlin = require('../models/YapePlin');
const Loan = require('../models/Loan');
const Streaming = require('../models/Streaming');

// Get dashboard summary
router.get('/', async (req, res) => {
    try {
        // Get current salary
        const salary = await Salary.findOne().sort({ updatedAt: -1 });
        const salaryAmount = salary ? salary.amount : 0;

        // Get total income
        const incomes = await Income.find();
        const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);

        // Get total expenses (50% - Necesidades)
        const expenses = await Expense.find();
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

        // Get total extra expenses (30% - Deseos)
        const extraExpenses = await ExtraExpense.find();
        const totalExtraExpenses = extraExpenses.reduce((sum, extra) => sum + extra.amount, 0);

        // Get streaming total (part of 30% - Deseos)
        const streamingServices = await Streaming.find({ isActive: true });
        const totalStreaming = streamingServices.reduce((sum, service) => sum + service.monthlyPrice, 0);

        // Get credit card debt
        const creditCards = await CreditCard.find({ isPaid: false });
        const totalCreditCardDebt = creditCards.reduce((sum, card) => sum + card.amount, 0);

        // Get Yape/Plin transactions (sent only)
        const yapePlinTransactions = await YapePlin.find({ transactionType: 'Enviado' });
        const totalYapePlin = yapePlinTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);

        // Get active loans
        const loans = await Loan.find({ isPaid: false });
        const totalLoanDebt = loans.reduce((sum, loan) => sum + loan.remainingAmount, 0);
        const totalMonthlyLoanPayment = loans.reduce((sum, loan) => sum + loan.monthlyPayment, 0);

        // Calculate 50/30/20 distribution
        const totalMonthlyIncome = salaryAmount + totalIncome;

        // 50% - Necesidades (Regular expenses)
        const necesidades = totalExpenses;
        const necesidadesPercentage = totalMonthlyIncome > 0 ? (necesidades / totalMonthlyIncome) * 100 : 0;

        // 30% - Deseos (Extra expenses + Streaming)
        const deseos = totalExtraExpenses + totalStreaming;
        const deseosPercentage = totalMonthlyIncome > 0 ? (deseos / totalMonthlyIncome) * 100 : 0;

        // 20% - Ahorro (Savings - what's left)
        const ahorro = totalMonthlyIncome - necesidades - deseos;
        const ahorroPercentage = totalMonthlyIncome > 0 ? (ahorro / totalMonthlyIncome) * 100 : 0;

        res.json({
            salary: {
                amount: salaryAmount,
                lastUpdated: salary ? salary.updatedAt : null
            },
            totals: {
                income: totalIncome,
                expenses: totalExpenses,
                extraExpenses: totalExtraExpenses,
                streaming: totalStreaming,
                creditCardDebt: totalCreditCardDebt,
                yapePlin: totalYapePlin,
                loanDebt: totalLoanDebt,
                monthlyLoanPayment: totalMonthlyLoanPayment
            },
            monthlyIncome: totalMonthlyIncome,
            distribution: {
                necesidades: {
                    amount: necesidades,
                    percentage: necesidadesPercentage.toFixed(2),
                    ideal: 50
                },
                deseos: {
                    amount: deseos,
                    percentage: deseosPercentage.toFixed(2),
                    ideal: 30
                },
                ahorro: {
                    amount: ahorro,
                    percentage: ahorroPercentage.toFixed(2),
                    ideal: 20
                }
            },
            counts: {
                incomes: incomes.length,
                expenses: expenses.length,
                extraExpenses: extraExpenses.length,
                streamingServices: streamingServices.length,
                creditCards: creditCards.length,
                yapePlinTransactions: yapePlinTransactions.length,
                activeLoans: loans.length
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
