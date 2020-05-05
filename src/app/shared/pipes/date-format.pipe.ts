import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { BrowserHelper } from '../helpers/browser.helper';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string, format?: string): string {
    if (value === undefined || value === null) { return null; }
    // const language = BrowserHelper.getBrowserLanguage();
    const dateFormat = format !== undefined ? format : 'L';
    const date = moment.utc(value);
    return date.locale('pt-br').local().format(dateFormat);
  }
}
