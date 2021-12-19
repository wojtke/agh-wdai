import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}

  transform(price: string, new_sign: string): string {

    let old_sign = price[0];

    let re = /^\d$/;
    if(re.test(old_sign)) {
      return price;
    }

    let value = parseFloat(price.slice(1));

    let ratio = this.currencyService.getRatio(old_sign);

    return new_sign + (value*ratio).toFixed(2);
    }

}
