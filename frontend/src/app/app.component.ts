import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    template: `
    <div class="app-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <h2 class="app-title">💰 Finanzas</h2>
          <p class="app-subtitle">Gestión Personal</p>
        </div>
        
        <nav class="sidebar-nav">
          <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">
            <span class="nav-icon">📊</span>
            <span class="nav-text">Dashboard</span>
          </a>
          
          <div class="nav-section">
            <h3 class="nav-section-title">Ingresos</h3>
            <a routerLink="/income" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">💵</span>
              <span class="nav-text">Ingresos</span>
            </a>
          </div>
          
          <div class="nav-section">
            <h3 class="nav-section-title">Gastos</h3>
            <a routerLink="/expenses" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">🏠</span>
              <span class="nav-text">Gastos (50%)</span>
            </a>
            <a routerLink="/extra-expenses" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">🎮</span>
              <span class="nav-text">Extras (30%)</span>
            </a>
          </div>
          
          <div class="nav-section">
            <h3 class="nav-section-title">Pagos</h3>
            <a routerLink="/credit-cards" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">💳</span>
              <span class="nav-text">Tarjetas</span>
            </a>
            <a routerLink="/yape-plin" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">📱</span>
              <span class="nav-text">Yape/Plin</span>
            </a>
          </div>
          
          <div class="nav-section">
            <h3 class="nav-section-title">Otros</h3>
            <a routerLink="/loans" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">🏦</span>
              <span class="nav-text">Préstamos</span>
            </a>
            <a routerLink="/streaming" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">📺</span>
              <span class="nav-text">Streaming</span>
            </a>
          </div>
        </nav>
      </aside>
      
      <!-- Main Content -->
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
    styles: [`
    .app-container {
      display: flex;
      min-height: 100vh;
      background: var(--bg-primary);
    }

    .sidebar {
      width: 280px;
      background: linear-gradient(180deg, hsl(220, 90%, 56%) 0%, hsl(220, 90%, 46%) 100%);
      color: white;
      padding: var(--spacing-xl);
      box-shadow: var(--shadow-lg);
      overflow-y: auto;
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
    }

    .sidebar-header {
      margin-bottom: var(--spacing-2xl);
      padding-bottom: var(--spacing-lg);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .app-title {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0;
      color: white;
    }

    .app-subtitle {
      font-size: 0.875rem;
      margin: var(--spacing-xs) 0 0 0;
      color: rgba(255, 255, 255, 0.8);
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .nav-section {
      margin-top: var(--spacing-lg);
    }

    .nav-section-title {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: var(--spacing-sm);
      padding-left: var(--spacing-sm);
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      padding: var(--spacing-md);
      border-radius: var(--radius);
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      transition: var(--transition-fast);
      font-weight: 500;
      font-size: 0.9375rem;
    }

    .nav-item:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(4px);
    }

    .nav-item.active {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-icon {
      font-size: 1.25rem;
      width: 24px;
      text-align: center;
    }

    .nav-text {
      flex: 1;
    }

    .main-content {
      flex: 1;
      margin-left: 280px;
      padding: var(--spacing-2xl);
      min-height: 100vh;
    }

    @media (max-width: 768px) {
      .sidebar {
        width: 100%;
        position: relative;
        height: auto;
      }

      .main-content {
        margin-left: 0;
        padding: var(--spacing-lg);
      }
    }
  `]
})
export class AppComponent {
    title = 'Gestión de Finanzas';
}
