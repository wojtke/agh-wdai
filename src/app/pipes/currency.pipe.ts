import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}
//FIXME fix the pipe
  transform(price: string): string {
    console.log(price);
    let sign = price[0];
    if (sign === this.currencyService.getCurrencySign()) {
      return price;
    } else {

    let value = parseFloat(price.slice(1));

    let ratio = this.currencyService.getRatio(sign);

    return this.currencyService.getCurrencySign() + (value*ratio).toFixed(2);
    }
  }

}
