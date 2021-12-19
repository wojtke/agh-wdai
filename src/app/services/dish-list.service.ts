import { Injectable } from '@angular/core';
import { Dish } from '../models/Dish';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishListService {
  dishes: Dish[] = [];

  getDishes() {
    return this.http.get<Dish[]>('/api/menu');
  }
  getDishById(id: string) {
    return this.http.get<Dish[]>('/api/menu/' + id);
  }

  addDish(dish: Dish) {
    return this.http.post('/api/menu/new', dish);
  }

  deleteDish(dish: Dish){
    return this.http.delete('/api/menu/' + dish._id);
  }

  constructor(private http: HttpClient) { }
}
