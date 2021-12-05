import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Dish } from '../../Dish';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onAddDish = new EventEmitter;
  @Output() onCurrencyChange = new EventEmitter;

  addDish(dish: Dish) {
    this.onAddDish.emit(dish);
  }

  changeCurrency(currency: string) {
    this.onCurrencyChange.emit(currency);
  }

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
