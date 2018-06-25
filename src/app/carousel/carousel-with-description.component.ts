import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-with-description',
  template: `
  <div *carousel="let image from images; let ctrl = controller">

      <button (click)="ctrl.prev()" mat-icon-button class="left-button">
        <mat-icon>navigate_before</mat-icon>
      </button>

      <main class="mat-elevation-z4">
        <img [src]="image.url">
        <p>{{ image.description }}</p>
      </main>

      <button (click)="ctrl.next()" mat-icon-button class="right-button">
        <mat-icon>navigate_next</mat-icon>
      </button>
  </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 300px;
        height: 300px;
        position: relative;
      }

      img {
        display: block;
        max-width: 100%;
        height auto;
      }

      button {
        position: absolute;
        top: 25%;
      }

      .left-button {
        left: 0;
      }

      .right-button {
        right: 0;
      }

      p {
        margin: 0;
        padding: 1em;
      }

      main {
        margin-bottom: 16px;
      }

    `
  ]
})
export class CarouselWithDescriptionComponent {
  images = [
    {
      url: '/assets/1.png',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
    },
    {
      url: '/assets/2.png',
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`
    },
    {
      url: '/assets/3.png',
      description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.`
    }
  ];
}
