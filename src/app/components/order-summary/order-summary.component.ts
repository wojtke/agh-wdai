import { Component, OnInit } from '@angular/core';
import {CartService, CurrencyService} from "src/app/services";
import {timer} from "rxjs";
import {OrderCart} from "src/app/models";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CurrencyPipe} from "../../pipes";

@Component({
  selector: 'app-cart',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  orders: OrderCart[] = [];
  total!: { value: number, currency: string };
  loading: boolean = true;


  constructor(public cartService: CartService,
              public currencyService: CurrencyService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loading = true;
    this.cartService.refreshCart();
    this.cartService.orders.subscribe(orders => {
      this.orders = orders;
    });
    this.cartService.total.subscribe(total => {
      this.total = total;
    },
    error => {
      console.log(error);
    });


    timer(2000).subscribe( val=> {this.loading = false;})
  }

  openModal(modal: any) {
    this.modalService.open(modal, );
  }

}
