import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {
  refresh_count = 0;
  search_query: string = "";
  
  categories_filter: string[] = [];
  cusines_filter: string[] = [];
  price_min: number = 0;
  price_max: number = 100000;

  rate_min: number = 0;

  setSearchQuery(query: string) {
    this.search_query = query;
    this.refresh_count++;
  }
  getSearchQuery() {
    return this.search_query;
  }

  setCategories(categories: string[]) {
    this.categories_filter = categories;
    this.refresh_count++;
  }
  getCategories() {
    return this.categories_filter;
  }

  setCusines(cusines: string[]) {
    this.cusines_filter = cusines;
    this.refresh_count++;
  } 
  getCusines() {
    return this.cusines_filter;
  }

  setPriceRange(min:number, max:number) {
    this.price_max = max;
    this.price_min = min;
    this.refresh_count++;
  }
  getPriceRange() {
    return [this.price_min, this.price_max]
  }

  setMinRating(rating: number) {
    this.rate_min = rating;
    this.refresh_count++;
  }
  getMinRating() {
    return this.rate_min;
  }

  refresh() {
    return this.refresh_count;
  }
  
  constructor() { }
}
