import {Injectable, OnInit} from '@angular/core';
import { Dish } from '../models/Dish';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishService implements OnInit {

  getDishes() {
    return this.http.get<Dish[]>('/api/menu');
  }

  getDishById(id: string) {
    return this.http.get<Dish>('/api/menu/' + id);
  }

  addDish(data: any) {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.post('/api/menu', data)
      .subscribe(
        val => {
          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      )
    return res_value.asObservable();
  }


  updateDish(id: string, data: any) {
    let res_value = new BehaviorSubject<Number>(0);

    delete data._id;
    this.http.patch('/api/menu/' + id, data)
      .subscribe(
        val => {
          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      )
    return res_value.asObservable();
  }

  deleteDish(id: string) {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.delete('/api/menu/' + id)
      .subscribe(
        val => {
          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      )
    return res_value.asObservable();
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
