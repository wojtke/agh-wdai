import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {
  USDtoEUR = 0.88;

  transform(price: string, currency: string): string {
    let symbol = price[0];
    let value = parseFloat(price.slice(1));

    if (symbol == '$' && currency.toUpperCase() == 'EUR') {
      return '€' + (value * this.USDtoEUR).toFixed(0) + '.99';
    } else if (symbol == '€' && currency.toUpperCase() == 'USD') {
      return '$' + (value / this.USDtoEUR).toFixed(0) + '.99';
    } else {
      return price;
    }
    
  }

}
