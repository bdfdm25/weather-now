import { Weather } from './weather.model';
import { Temperature } from './temperature.model';
import { Wind } from './wind.model';

export class WeatherResponse {
  dt_txt: string;
  weather: Array<Weather>;
  main: Temperature;
  wind: Wind;
  name: string;
}
