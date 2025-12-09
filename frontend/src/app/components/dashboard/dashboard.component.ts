import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { ApiService } from '../../services/api.service';
import { DashboardData, Salary } from '../../models/financial.models';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    dashboardData: DashboardData | null = null;
    loading = true;
    editingSalary = false;
    newSalary: number = 0;

    constructor(
        private dashboardService: DashboardService,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.loadDashboard();
    }

    getEmptyDashboardData(): DashboardData {
        return {
            salary: {
                amount: 0,
                lastUpdated: null
            },
            totals: {
                income: 0,
                expenses: 0,
                extraExpenses: 0,
                streaming: 0,
                creditCardDebt: 0,
                yapePlin: 0,
                loanDebt: 0,
                monthlyLoanPayment: 0
            },
            monthlyIncome: 0,
            distribution: {
                necesidades: {
                    amount: 0,
                    percentage: '0',
                    ideal: 50
                },
                deseos: {
                    amount: 0,
                    percentage: '0',
                    ideal: 30
                },
                ahorro: {
                    amount: 0,
                    percentage: '0',
                    ideal: 20
                }
            },
            counts: {
                incomes: 0,
                expenses: 0,
                extraExpenses: 0,
                streamingServices: 0,
                creditCards: 0,
                yapePlinTransactions: 0,
                activeLoans: 0
            }
        };
    }

    loadDashboard() {
        this.loading = true;
        this.dashboardService.getDashboardData().subscribe({
            next: (data) => {
                this.dashboardData = data;
                this.newSalary = data.salary.amount;
                this.loading = false;

                // Initialize chart after data is loaded
                setTimeout(() => this.initChart(), 100);
            },
            error: (error) => {
                console.error('Error loading dashboard:', error);
                // Create default empty data structure
                this.dashboardData = this.getEmptyDashboardData();
                this.loading = false;
                setTimeout(() => this.initChart(), 100);
            }
        });
    }

    startEditSalary() {
        this.editingSalary = true;
    }

    cancelEditSalary() {
        this.editingSalary = false;
        if (this.dashboardData) {
            this.newSalary = this.dashboardData.salary.amount;
        }
    }

    saveSalary() {
        const salaryData = { amount: this.newSalary };

        this.apiService.create<Salary>('salary', salaryData).subscribe({
            next: () => {
                this.editingSalary = false;
                this.loadDashboard();
            },
            error: (error) => {
                console.error('Error updating salary:', error);
            }
        });
    }

    formatCurrency(amount: number): string {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(amount);
    }

    formatDate(date: Date | null): string {
        if (!date) return 'No actualizado';
        return new Intl.DateTimeFormat('es-PE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    }

    initChart() {
        if (!this.dashboardData) return;

        const canvas = document.getElementById('financeChart') as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const data = this.dashboardData.distribution;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 30;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Data for pie chart
        const necesidades = parseFloat(data.necesidades.percentage) || 50;
        const deseos = parseFloat(data.deseos.p