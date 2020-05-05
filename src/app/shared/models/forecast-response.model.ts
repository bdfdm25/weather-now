import { WeatherResponse } from './weather-response.model';
import { City } from './city.model';

export class ForecastResponse {
  list: Array<WeatherResponse>;
  city: City;
}
