export interface Salary {
    _id?: string;
    amount: number;
    updatedAt: Date;
    createdAt?: Date;
}

export interface Income {
    _id?: string;
    description: string;
    amount: number;
    date: Date;
    category: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Expense {
    _id?: string;
    description: string;
    amount: number;
    category: 'Vivienda' | 'Alimentación' | 'Transporte' | 'Servicios' | 'Salud' | 'Otros';
    date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ExtraExpense {
    _id?: string;
    description: string;
    amount: number;
    category: 'Entretenimiento' | 'Restaurantes' | 'Compras' | 'Hobbies' | 'Viajes' | 'Otros';
    date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CreditCard {
    _id?: string;
    cardName: string;
    bank: string;
    description: string;
    amount: number;
    date: Date;
    isPaid: boolean;
    dueDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface YapePlin {
    _id?: string;
    type: 'Yape' | 'Plin';
    description: string;
    amount: number;
    transactionType: 'Enviado' | 'Recibido';
    date: Date;
    recipient?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Loan {
    _id?: string;
    creditor: string;
    description: string;
    totalAmount: number;
    remainingAmount: number;
    interestRate: number;
    monthlyPayment: number;
    startDate: Date;
    dueDate: Date;
    isPaid: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Streaming {
    _id?: string;
    serviceName: 'Netflix' | 'Disney+' | 'HBO Max' | 'Amazon Prime' | 'Spotify' | 'YouTube Premium' | 'Apple TV+' | 'Otros';
    monthlyPrice: number;
    billingDate: number;
    isActive: boolean;
    accountType: 'Individual' | 'Familiar' | 'Compartida';
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface DashboardData {
    salary: {
        amount: number;
        lastUpdated: Date | null;
    };
    totals: {
        income: number;
        expenses: number;
        extraExpenses: number;
        streaming: number;
        creditCardDebt: number;
        yapePlin: number;
        loanDebt: number;
        monthlyLoanPayment: number;
    };
    monthlyIncome: number;
    distribution: {
        necesidades: {
            amount: number;
            percentage: string;
            ideal: number;
        };
        deseos: {
            amount: number;
            percentage: string;
            ideal: number;
        };
        ahorro: {
            amount: number;
            percentage: string;
            ideal: number;
        };
    };
    counts: {
        incomes: number;
        expenses: number;
        extraExpenses: number;
        streamingServices: number;
        creditCards: number;
        yapePlinTransactions: number;
        activeLoans: number;
    };
}
