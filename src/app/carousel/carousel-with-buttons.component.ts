import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-with-buttons',
  template: `
  <div *carousel="let url from images; let ctrl = controller">
    <img [src]="url" class="mat-elevation-z4">

    <footer>
      <button (click)="ctrl.prev()" mat-fab>
        <mat-icon>navigate_before</mat-icon>
      </button>
      <button (click)="ctrl.next()" mat-fab>
        <mat-icon>navigate_next</mat-icon>
      </button>
    </footer>
  </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 300px;
        height: 300px;
      }

      img {
        display: block;
        max-width: 100%;
        height auto;
        margin-bottom: 16px;
      }

      footer {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button {
        margin: 0 8px;
      }
    `
  ]
})
export class CarouselWithButtonsComponent {
  images = ['/assets/1.png', '/assets/2.png', '/assets/3.png'];
}
