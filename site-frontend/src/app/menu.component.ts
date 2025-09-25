import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="menu-main">
      <h1>Menu de Navegação</h1>
      <nav>
        <ul>
          <li><a routerLink="/menu" routerLinkActive="active">Menu</a></li>
          <li><a routerLink="/oque" routerLinkActive="active">Seção “O que é?”</a></li>
          <!-- Se quiser adicionar Lorawan depois, descomente abaixo -->
          <!-- <li><a routerLink="/lorawan" routerLinkActive="active">Página Lorawan</a></li> -->
        </ul>
      </nav>
    </main>
  `,
  styles: [`
    .menu-main {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background: #fafafa;
      border-radius: 18px;
      box-shadow: 0 2px 16px rgba(0,0,0,0.07);
      text-align: center;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 1.5rem;
    }
    nav ul {
      list-style: none;
      padding: 0;
    }
    nav li {
      margin: 1rem 0;
    }
    a {
      color: #1976d2;
      font-size: 1.2rem;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    a.active, a:hover {
      color: #fbc02d;
    }
  `]
})
export class MenuComponent {}
