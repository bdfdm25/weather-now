import { environment } from './../../../environments/environment';

const BASE_URL = environment.apiUrl;

export class Routes {

  // Weather by City name
  static WEATHER_BY_CITY = `${BASE_URL}/weather`;

  // Forecast by City name
  static FORECAST_BY_CITY = `${BASE_URL}/forecast`;
  // Character by ID
  // static HERO_BY_ID = (id: number | string) => `${BASE_URL}/characters/${id}`;
}
