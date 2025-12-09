import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-extra-expenses',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h1 class="page-title">🎮 Gastos Extras (30%)</h1>
          <p class="page-subtitle">Entretenimiento, Restaurantes, Compras, Hobbies, Viajes</p>
        </div>
      </div>
      <div class="card">
        <p>Módulo de gastos extras - Implementación pendiente</p>
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
export class ExtraExpensesComponent { }
