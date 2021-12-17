import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Dish } from '../../Dish';
import { CurrencyPipe } from 'src/app/pipes/currency.pipe';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish!: Dish;
  @Output() onDelete = new EventEmitter<Dish>();
  
  currencyPipe = CurrencyPipe;

  orders: number = 0;

  get availability(): string {
    let count = this.dish.max_orders - this.orders;
    if (count > 3) {
      return "normal";
    } else if (count > 0) {
      return "low";
    } else {
      return "none";
    }
  }

  addOrder() {
    this.orders++;
    this.cartService.addOrder(this.dish);
  }

  removeOrder() {
    this.orders--;
    this.cartService.removeOrder(this.dish);
  }

  del() {
    this.onDelete.emit(this.dish);
  }

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
