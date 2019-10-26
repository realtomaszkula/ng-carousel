import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselWithAutoplayComponent } from './carousel-with-autoplay.component';
import { CarouselWithButtonsComponent } from './carousel-with-buttons.component';
import { CarouselDirective } from './carousel.directive';
import { CarouselWithDescriptionComponent } from './carousel-with-description.component';

@NgModule({
  declarations: [
    CarouselDirective,
    CarouselWithAutoplayComponent,
    CarouselWithButtonsComponent,
    CarouselWithDescriptionComponent
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  providers: [],
  exports: [
    CarouselDirective,
    CarouselWithAutoplayComponent,
    CarouselWithButtonsComponent,
    CarouselWithDescriptionComponent
  ]
})
export class CarouselModule {}
