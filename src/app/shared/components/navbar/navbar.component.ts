import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public lat: string;
  public lon: string;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getUserGeoLocation();
  }

  onSearch(cityName: string) {
    this.weatherService.getWeatherByCity(cityName);
    this.weatherService.getForecastByCity(cityName);
  }

  getUserGeoLocation() {
    window.navigator.geolocation.getCurrentPosition(res => {
      this.lat = res.coords.latitude.toString();
      this.lon = res.coords.longitude.toString();
      this.weatherService.getWeatherByCoords(this.lat, this.lon);
      this.weatherService.getForecastByCoords(this.lat, this.lon);
    });
  }

}
