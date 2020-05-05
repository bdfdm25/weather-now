import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { WeatherResponse } from 'src/app/shared/models/weather-response.model';

@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent implements OnInit {

  public weatherInfo: WeatherResponse;
  public today: Date;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.today = new Date();
    this.weatherService.getWeatherInfo().subscribe((res: WeatherResponse) => { this.weatherInfo = res; });
  }

}
