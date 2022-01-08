import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CurrencyService, CartService, DishService, AccountService, DishesTransform} from "src/app/services";
import {Dish} from "src/app/models";
import {CurrencyPipe} from "src/app/pipes";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish!: Dish;
  @Input() manage: boolean = false;
  @ViewChild('dishDetailsModal') dishDetailsModal!: ElementRef<HTMLElement>;

  currencyPipe = CurrencyPipe;

  orders: number = 0;

  constructor(public cartService: CartService,
              public dishService: DishService,
              public dishTransformService: DishesTransform,
              public currencyService: CurrencyService,
              public accountService: AccountService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  get left() {
    return this.dish.max_orders - this.orders;
  }

  addOrder() {
    this.orders++;
    this.cartService.addToCart(this.dish);
  }

  delete() {
    this.dishService.deleteDish(this.dish._id)
      .subscribe(
        res => {
          this.dishTransformService.refreshDishes();
        },
        err => {
          console.log(err);
        }
      );
  }

  openModalBig(modal: any): void {
    this.modalService.open(modal, { size: 'xl' });
  }

  openModal(modal: any) {
    this.modalService.open(modal, );
  }
}



