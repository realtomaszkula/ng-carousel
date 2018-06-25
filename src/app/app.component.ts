import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
       <button mat-button routerLink="with-autoplay">Autoplay</button>
       <button mat-button routerLink="with-buttons">Buttons</button>
       <button mat-button routerLink="with-description">Description</button>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      :host {
        min-height: 100vh;
      }

      mat-toolbar {
        margin-bottom: 48px;
      }

      main {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class AppComponent {}
