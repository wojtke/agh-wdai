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

  get(): string {
    return this.currency;
  }

  getRatio(sign: string): number {
    console.log(sign);
    if (sign==="$" && this.currency==="€") return 0.88;
    else if (sign==="€" && this.currency==="$") return 1.14;
    else return 1;
  }

  compare( a: {value: number, currency: string}, b: {value: number, currency: string} | null): number {
    if (b==null) return 0;
    if (a.currency === b.currency) return a.value - b.value;
    else return a.value * this.getRatio(a.currency) - b.value * this.getRatio(b.currency);
  }



  constructor() { }
}
