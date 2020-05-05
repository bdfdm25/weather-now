import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { ForecastResponse } from 'src/app/shared/models/forecast-response.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  public forecastInfo: ForecastResponse;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.getForecastInfo().subscribe((res: ForecastResponse) => { this.forecastInfo = res; console.log(this.forecastInfo)});
  }

}
