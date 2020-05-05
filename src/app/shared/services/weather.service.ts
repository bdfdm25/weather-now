import { Routes } from './../helpers/routes.helper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { WeatherResponse } from '../models/weather-response.model';
import { ForecastResponse } from '../models/forecast-response.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private readonly weatherResults: Subject<WeatherResponse> = new BehaviorSubject<WeatherResponse>(null);
  private readonly weather$: Observable<WeatherResponse> = this.weatherResults.asObservable();

  private readonly forecastResults: Subject<ForecastResponse> = new BehaviorSubject<ForecastResponse>(null);
  private readonly forecast$: Observable<ForecastResponse> = this.forecastResults.asObservable();

  constructor(private http: HttpClient) {}

  getWeatherByCity(cityName: string): void {
    this.http.get(Routes.WEATHER, {
      params: {
        q: cityName
      }
    }).subscribe((response: WeatherResponse) => this.weatherResults.next(response));
  }

  getWeatherByCoords(latitude: string, longitude: string) {
    this.http.get(Routes.WEATHER, {
      params: {
        lat: latitude,
        lon: longitude
      }
    }).subscribe((response: WeatherResponse) => this.weatherResults.next(response));
  }

  getWeatherInfo(): Observable<WeatherResponse> {
    return this.weather$;
  }

  getForecastByCity(cityName: string) {
    this.http.get(Routes.FORECAST, {
      params: {
        q: cityName,
        cnt: '5'
      }
    }).subscribe((response: ForecastResponse) => this.forecastResults.next(response));
  }

  getForecastByCoords(latitude: string, longitude: string) {
    this.http.get(Routes.FORECAST, {
      params: {
        lat: latitude,
        lon: longitude,
        cnt: '5'
      }
    }).subscribe((response: ForecastResponse) => this.forecastResults.next(response));
  }

  getForecastInfo(): Observable<ForecastResponse> {
    return this.forecast$;
  }
}

// `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${this.API_KEY}&units=metric&cnt=5`