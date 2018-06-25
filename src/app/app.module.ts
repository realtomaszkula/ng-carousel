import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarouselModule } from './carousel';
import { CarouselWithAutoplayComponent } from './carousel/carousel-with-autoplay.component';
import { CarouselWithButtonsComponent } from './carousel/carousel-with-buttons.component';
import { CarouselWithDescriptionComponent } from './carousel/carousel-with-description.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: 'with-autoplay', component: CarouselWithAutoplayComponent },
      { path: 'with-description', component: CarouselWithDescriptionComponent },
      { path: 'with-buttons', component: CarouselWithButtonsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
