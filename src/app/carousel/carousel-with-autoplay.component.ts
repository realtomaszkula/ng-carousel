import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-with-autoplay',
  template: `
  <div *carousel="let url from images autoplay 'on' withDelay 1000" class="mat-elevation-z4">
    <img [src]="url">
  </div>
  `,
  animations: [],
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
      }
    `
  ]
})
export class CarouselWithAutoplayComponent {
  images = ['/assets/1.png', '/assets/2.png', '/assets/3.png'];
}
