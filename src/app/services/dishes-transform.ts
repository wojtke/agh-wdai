import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DishService} from "./dish.service";
import {Dish} from "../models";
import {CurrencyService} from "./currency.service";
import {ReviewsService} from "./reviews.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DishesTransform {
  transformedDishesSubject = new BehaviorSubject<Dish[]>([]);
  transformedPaginatedDishesSubject = new BehaviorSubject<Dish[]>([]);

  get dishes(): Observable<Dish[]> {
    return this.transformedDishesSubject.asObservable();
  }

  get paginatedDishes(): Observable<Dish[]> {
    return this.transformedPaginatedDishesSubject.asObservable();
  }

  search_query: string = "";
  categories_filter: string[] = [];
  cuisines_filter: string[] = [];
  price_min: {value: number, currency: string} | null = null;
  price_max: {value: number, currency: string} | null = null;
  rate_min: number | null = null;

  page: number = 1;
  per_page: number = 12;

  setSearchQuery(query: string) {
    this.search_query = query;
    this.refreshDishes();
  }

  setCategories(categories: string[]) {
    this.categories_filter = categories;
    this.refreshDishes();
  }

  setCuisines(cuisines: string[]) {
    this.cuisines_filter = cuisines;
    this.refreshDishes();
  }

  setPriceRange(min:{value: number, currency: string} | null, max:{value: number, currency: string} | null) {
    this.price_max = max;
    this.price_min = min;
    this.refreshDishes();
  }

  setMinRating(rating: number) {
    this.rate_min = rating;
    this.refreshDishes();
  }

  pagecount() {
    return Math.ceil(this.transformedDishesSubject.value.length / this.per_page);
  }

  paginationRefresh() {
    if (this.page > this.pagecount()) {
      this.page = this.pagecount();
    }
    this.transformedPaginatedDishesSubject
      .next(this.transformedDishesSubject.value.slice(
        (this.page - 1) * this.per_page,
        this.page * this.per_page
    ));
  }

  search(dishes: Dish[]): Dish[] {
    if (this.search_query.length>0) {
      return  dishes.filter(dish => dish.name.toLowerCase().indexOf(this.search_query.toLowerCase()) != -1);
    } else return dishes;
  }

  filterCategory(dishes: Dish[]): Dish[] {
    if (this.categories_filter.length>0) {
      return  dishes.filter(dish => !dish.categories
        .every(category => this.categories_filter.indexOf(category) === -1));
    } else return dishes;
  }

  filterCuisine(dishes: Dish[]): Dish[] {
    if (this.cuisines_filter.length>0) {
      return  dishes.filter(dish => this.cuisines_filter.indexOf(dish.cuisine) != -1);
    } else return dishes;
  }

  filterPrice(dishes: Dish[]): Dish[] {
    if (this.price_min != null || this.price_max != null) {

      return dishes.filter(dish => (
        this.currencyService.compare(dish.price, this.price_min) >= 0 &&
        this.currencyService.compare(dish.price, this.price_max) <= 0
      ));

    } else return dishes;
  }

  /*
  filterRating(dishes: Dish[]): Dish[] {
    if (this.rate_min != null) {
      return dishes.filter(dish => {
        if (this.reviewService.getDishAvgRating(dish) != null) {
          return this.reviewService.getDishAvgRating(dish) >= this.rate_min;
        } else return true;
      });
    } else return dishes;
  }*/


  refreshDishes() {
    this.dishService.getDishes()
      .subscribe(dishes => {
        dishes = this.filterCuisine(dishes);
        dishes = this.filterCategory(dishes);
        dishes = this.filterPrice(dishes);
        dishes = this.search(dishes);

        this.transformedDishesSubject.next(dishes);
        this.paginationRefresh();
      });

    this.page = 1;

  }

  constructor(private dishService: DishService,
              private currencyService: CurrencyService,
              private reviewService: ReviewsService) { }
}
