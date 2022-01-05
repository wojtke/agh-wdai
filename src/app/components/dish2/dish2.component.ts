import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CurrencyService} from "../../services/currency.service";
import {Dish} from "../../models/Dish";
import {CurrencyPipe} from "../../pipes/currency.pipe";

@Component({
  selector: 'app-dish2',
  templateUrl: './dish2.component.html',
  styleUrls: ['./dish2.component.css']
})
export class Dish2Component implements OnInit {
  @Input() dish!: Dish;

  currencyPipe = CurrencyPipe;

  orders: number = 0;

  constructor(public cartService: CartService, public currencyService: CurrencyService) { }

  get left() {
    return this.dish.max_orders - this.orders;
  }

  addOrder() {
    this.orders++;
    this.cartService.addOrder(this.dish);
  }

  removeOrder() {
    this.orders--;
    this.cartService.removeOrder(this.dish);
  }

  ngOnInit(): void {
  }

}
