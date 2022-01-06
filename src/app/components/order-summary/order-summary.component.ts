import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services";
import {timer} from "rxjs";
import {OrderCart} from "src/app/models";

@Component({
  selector: 'app-cart',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  orders: OrderCart[] = [];
  loading: boolean = true;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cartService.refreshCart();
    this.cartService.orders.subscribe(orders => {
      this.orders = orders;
    });
    timer(2000).subscribe( val=> {this.loading = false;})
  }

}
