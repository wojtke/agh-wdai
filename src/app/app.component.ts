import { Component } from '@angular/core';
import { DISHES } from './mock-dishes';
import { Dish } from './Dish';
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restauracja';
  currency: string = 'USD';
  dish_list = DISHES;

  selectedCategories: string[] = [];
  selectedCusines: string[] = [];

  filter = FilterPipe;

  deleteDish(dish: Dish) {
    this.dish_list = this.dish_list.filter(d => d.id !== dish.id);
  }

  addDish(dish: Dish) {
    this.dish_list.push(dish);
  }

  changeCurrency(currency: string) {
    this.currency = currency;
  }

  changeCategories(categories: string[]) {
    this.selectedCategories = categories;
  }
  changeCusines(cusines: string[]) {
    this.selectedCusines = cusines;
  }
}
