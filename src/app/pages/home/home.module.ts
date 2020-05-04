import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from 'src/app/shared/services/weather.service';

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
  providers: [
    WeatherService
  ]
})
export class HomeModule { }
