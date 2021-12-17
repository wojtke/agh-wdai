import { Injectable } from '@angular/core';
import { Dish } from '../Dish';
import { DISHES } from '../mock-dishes'

@Injectable({
  providedIn: 'root'
})
export class DishListService {
  dishes: Dish[] = DISHES;


  getDishes() {
    return this.dishes;
  }
  getDishById(id: number) {
    return this.dishes[id];
  }

  addDish(dish: Dish) {
    this.dishes.push(dish);
  }

  deleteDish(dish: Dish){
    this.dishes = this.dishes.filter(d => d.id !== dish.id);
  }

  constructor() { }
}
