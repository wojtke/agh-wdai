import { Injectable } from '@angular/core';
import { DishListService } from './dish-list.service';
import { Dish } from '../models/Dish'
import { CurrencyService } from './currency.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orders: Map<Dish, number> = new Map();

  addOrder(dish: Dish) {
    let count = this.orders.get(dish) ?? 0
    this.orders.set(dish, count+1)
  }

  removeOrder(dish: Dish) {
    let count = this.orders.get(dish) ?? 0
    this.orders.set(dish, Math.max(count-1, 0))
  }

  getOrders() {
    return this.orders;
  }

  getOrderPairs() {
    let pairs: any[] = [];
    this.orders.forEach( (count, dish) => {pairs.push({"dish":dish, "count":count})});
    return pairs;
  }

  getOrderCount() {
    let all_count = 0;
    this.orders.forEach(count => all_count+=count);
    return all_count;
  }

  getTotal() {
    let total = 0;

    this.orders.forEach( (count, dish) => {
      let value = parseFloat(dish.price.slice(1));
      let currency = dish.price[0];
      let ratio = this.currencyService.getRatio(currency);

      total += parseFloat(dish.price) * count * ratio;
    });

    return this.currencyService.get() + total;
  }

  constructor(public dishListService: DishListService, public currencyService: CurrencyService) { }
}
