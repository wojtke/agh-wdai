import { Injectable } from '@angular/core';
import { DishListService } from './dish-list.service';
import { Dish } from '../Dish'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orders: Map<number, number> = new Map();

  addOrder(dish: Dish) {
    let count = this.orders.get(dish.id) ?? 0
    this.orders.set(dish.id, count+1)
  }

  removeOrder(dish: Dish) {
    let count = this.orders.get(dish.id) ?? 0
    this.orders.set(dish.id, Math.max(count-1, 0))
  }

  getOrders() {
    return this.orders;
  }

  getOrderList(): [Dish, number][] {
    let orderList: [Dish, number][] = [];
    this.orders.forEach((count, id) => {
      let dish = this.dishListService.getDishById(id);
        orderList.push([dish, count]);
    });

    return orderList;
  }

  getOrderCount() {
    let all_count = 0;
    this.orders.forEach(count => all_count+=count);
    return all_count;
  }

  getTotal() {
    let total = 0;

    return total;
  }

  constructor(public dishListService: DishListService) { }
}
