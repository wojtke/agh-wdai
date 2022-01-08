import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}

  transform(price: {value:number, currency:string}, new_currency: string): string {

    let ratio = this.currencyService.getRatio(price.currency);

    return new_currency + (price.value*ratio).toFixed(2);
    }

}
