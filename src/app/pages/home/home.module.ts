import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  declarations: [
    HomeComponent,
    WeatherNowComponent,
    ForecastComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class HomeModule { }
