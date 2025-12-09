import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-streaming',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h1 class="page-title">📺 Servicios de Streaming</h1>
          <p class="page-subtitle">Netflix, Disney+, HBO Max, Spotify, y más</p>
        </div>
      </div>
      <div class="card">
        <p>Módulo de streaming - Implementación pendiente</p>
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
export class StreamingComponent { }
