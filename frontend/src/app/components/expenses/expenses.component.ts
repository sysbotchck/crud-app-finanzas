import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-expenses',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h1 class="page-title">🏠 Gastos Necesarios (50%)</h1>
          <p class="page-subtitle">Vivienda, Alimentación, Transporte, Servicios, Salud</p>
        </div>
      </div>
      <div class="card">
        <p>Módulo de gastos necesarios - Implementación pendiente</p>
        <p class="text-muted">Este componente sigue el mismo patrón que el módulo de Ingresos.</p>
      </div>
    </div>
  `,
    styles: [`
    .page-container { animation: fadeIn 0.3s ease-out; }
    .page-header { margin-bottom: var(--spacing-xl); }
    .page-title { font-size: 2rem; margin: 0 0 var(--spacing-xs) 0; }
    .page-subtitle { color: var(--text-secondary); margin: 0; }
  `]
})
export class ExpensesComponent { }
