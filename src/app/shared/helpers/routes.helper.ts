import { environment } from './../../../environments/environment';

const BASE_URL = environment.apiUrl;

export class Routes {

  // Weather by City name
  static WEATHER = `${BASE_URL}/weather`;

  // Forecast by City name
  static FORECAST = `${BASE_URL}/forecast`;
}
