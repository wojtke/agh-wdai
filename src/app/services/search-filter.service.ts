import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {
  search_query: string = "";
  
  categories_filter: string[] = [];
  cusines_filter: string[] = [];
  price_min: number = 0;
  price_max: number = 100000;

  rate_min: number = 0;

  setSearchQuery(query: string) {
    this.search_query = query;
    console.log(this.search_query);
  }
  getSearchQuery() {
    return this.search_query;
  }

  setCategories(categories: string[]) {
    this.categories_filter = categories;
  }
  getCategories() {
    return this.categories_filter;
  }

  setCusines(cusines: string[]) {
    this.cusines_filter = cusines;
  } 
  getCusines() {
    return this.cusines_filter;
  }

  setPriceRange(min:number, max:number) {
    this.price_max = max;
    this.price_min = min;
  }
  getPriceRange() {
    return [this.price_min, this.price_max]
  }

  setMinRating(rating: number) {
    this.rate_min = rating;
  }
  getMinRating() {
    return this.rate_min;
  }

  constructor() { }
}
