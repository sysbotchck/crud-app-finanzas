import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExtraExpensesComponent } from './components/extra-expenses/extra-expenses.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { YapePlinComponent } from './components/yape-plin/yape-plin.component';
import { LoansComponent } from './components/loans/loans.component';
import { StreamingComponent } from './components/streaming/streaming.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'income',
        component: IncomeComponent
    },
    {
        path: 'expenses',
        component: ExpensesComponent
    },
    {
        path: 'extra-expenses',
        component: ExtraExpensesComponent
    },
    {
        path: 'credit-cards',
        component: CreditCardsComponent
    },
    {
        path: 'yape-plin',
        component: YapePlinComponent
    },
    {
        path: 'loans',
        component: LoansComponent
    },
    {
        path: 'streaming',
     