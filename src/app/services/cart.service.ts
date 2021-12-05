import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ordercount: number = 0;

  addOrder() {
    this.ordercount++;
  }

  removeOrder() {
    this.ordercount--;
  }

  getOrderCount() {
    return this.ordercount;
  }

  constructor() { }
}
