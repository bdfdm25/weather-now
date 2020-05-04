import { Routes } from './../helpers/routes.helper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private readonly searchResults: Subject<any> = new BehaviorSubject<any>(null);
  private readonly search$: Observable<any> = this.searchResults.asObservable();

  constructor(private http: HttpClient) {}

  getCurrentWeather(cityName: string): void {
    this.http.get(Routes.WEATHER_BY_CITY, {
      params: {
        q: cityName
      }
    }).subscribe(results => this.searchResults.next(results));
  }

  getWeatherInfo(): Observable<any> {
    return this.search$;
  }



  // getDailyWeather(cityName: string) {
  //   return this.http.get(
  //     `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${this.API_KEY}&units=metric&cnt=5`
  //   );
  // }
}
