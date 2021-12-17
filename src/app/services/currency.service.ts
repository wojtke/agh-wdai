import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency = "$"

  setCurrency(sign: string) {
    if (sign==="$" || sign==="€"){
    this.currency = sign;
    }
  }

  getCurrencySign() {
    return this.currency;
  }

  getRatio(sign: string): number {
    if (sign==="$" && this.currency==="€") return 0.88;
    else if (sign==="€" && this.currency==="$") return 1.14;
    else return 1;
  }

  constructor() { }
}
