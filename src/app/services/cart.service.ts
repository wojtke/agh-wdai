import { Injectable } from '@angular/core';
import { DishService } from './dish.service';
import { Dish } from '../models/Dish'
import { CurrencyService } from './currency.service';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OrderCart} from "../models/OrderCart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ordersSubject = new BehaviorSubject<OrderCart[]>([]);

  get orders() {
    return this.ordersSubject.asObservable();
  }

  get total() {
    return '$123';
  }

  refreshCart() {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.get<any[]>('/api/cart')
      .subscribe(
        val => {
          this.ordersSubject.next(val);
          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        });

    return res_value.asObservable();
  }

  addToCart(dish: Dish) {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.patch('/api/cart/add', { dish_id: dish._id})
      .subscribe(
        val => {
          res_value.next(200);
          this.refreshCart();
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      );
    return res_value.asObservable();
  }

  removeFromCart(dish: Dish) {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.patch('/api/cart/remove', { dish_id: dish._id})
      .subscribe(
        val => {
          res_value.next(200);
          this.refreshCart();
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      );
    return res_value.asObservable();
  }

  clearCart() {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.patch('/api/cart/clear', {})
      .subscribe(
        val => {
          res_value.next(200);
          this.refreshCart();
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      );
    return res_value.asObservable();
  }

  finalize() {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.post('/api/history', {})
      .subscribe(
        val => {
          res_value.next(200);
          this.refreshCart();
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      );
    return res_value.asObservable();
  }


  constructor(public dishService: DishService,
              public currencyService: CurrencyService,
              private http: HttpClient) { }
}
