import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicDirective } from './dynamic.directive';
import { MotorbikeComponent } from './motorbike/motorbike.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    DynamicComponent,
    DynamicDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    MotorbikeComponent,
    CarComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
