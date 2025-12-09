import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Income } from '../../models/financial.models';

@Component({
    selector: 'app-income',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
    incomes: Income[] = [];
    loading = true;
    showForm = false;
    editingId: string | null = null;

    formData: Partial<Income> = {
        description: '',
        amount: 0,
        date: new Date(),
        category: 'Otros'
    };

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.loadIncomes();
    }

    loadIncomes() {
        this.loading = true;
        this.apiService.getAll<Income>('income').subscribe({
            next: (data) => {
                this.incomes = data;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading incomes:', error);
                this.loading = false;
            }
        });
    }

    openForm() {
        this.showForm = true;
        this.editingId = null;
        this.resetForm();
    }

    editIncome(income: Income) {
        this.showForm = true;
        this.editingId = income._id || null;
        this.formData = {
            description: income.description,
            amount: income.amount,
            date: new Date(income.date),
            category: income.category
        };
    }

    closeForm() {
        this.showForm = false;
        this.editingId = null;
        this.resetForm();
    }

    resetForm() {
        this.formData = {
            description: '',
            amount: 0,
            date: new Date(),
            category: 'Otros'
        };
    }

    saveIncome() {
        if (this.editingId) {
            // Update
            this.apiService.update<Income>('income', this.editingId, this.formData).subscribe({
                next: () => {
                    this.loadIncomes();
                    this.closeForm();
                },
                error: (error) => console.error('Error updating income:', error)
            });
        } else {
            // Create
            this.apiService.create<Income>('income', this.formData).subscribe({
                next: () => {
                    this.loadIncomes();
                    this.closeForm();
                },
                error: (error) => console.error('Error creating income:', error)
            });
        }
    }

    deleteIncome(id: string) {
        if (confirm('¿Estás seguro de eliminar este ingreso?')) {
            this.apiService.delete('income', id).subscribe({
                next: () => this.loadIncomes(),
                error: (error) => console.error('Error deleting income:', error)
            });
        }
    }

    formatCurrency(amount: number): string {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(amount);
    }

    formatDate(date: Date): string {
        return new Intl.DateTimeFormat('es-PE', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(new Date(date));
    }

    getTotalIncome(): number {
        return this.incomes.reduce((sum, income) => sum + income.amount, 0);
    }
}
