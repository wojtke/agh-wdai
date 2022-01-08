import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/mock-data/Categories';
import { Cuisines } from 'src/app/mock-data/Cuisines';
import {CurrencyService, DishesTransform } from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  minPrice?: number;
  maxPrice?: number;
  categories = Categories;
  cuisines = Cuisines;

  constructor(public dishesTransformService: DishesTransform,
              private currencyService: CurrencyService) { }


  priceRangeChange() {
      this.dishesTransformService.setPriceRange(
        this.minPrice ? { value:this.minPrice, currency:this.currencyService.get()} : null,
        this.maxPrice ? { value:this.maxPrice, currency:this.currencyService.get()} : null
      );
  }

  ngOnInit(): void {
  }

}
