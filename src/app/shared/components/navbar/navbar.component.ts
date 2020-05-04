import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
  }

  onSearch(cityName: string) {
    this.weatherService.getCurrentWeather(cityName);
  }

}
