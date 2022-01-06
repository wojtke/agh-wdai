import { Pipe, PipeTransform } from '@angular/core';
import { Dish } from 'src/app/models/Dish';
import { SearchFilterService } from '../services/search-filter.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private searchFilterService: SearchFilterService) {}

  transform(dishes: Dish[], refresh: number): Dish[] {

      let priceRange = this.searchFilterService.getPriceRange()
      dishes = dishes.filter(dish => priceRange[0] < parseFloat(dish.price.slice(1)) && priceRange[1] > parseFloat(dish.price.slice(1)));

      dishes = dishes.filter(dish => true);

      let categories = this.searchFilterService.getCategories();
      if(categories.length>0){
        dishes = dishes.filter(dish => !dish.categories
          .every(category => categories.indexOf(category) === -1));
      }

      let cuisines = this.searchFilterService.getCuisines();
      if(cuisines.length>0){
        dishes = dishes.filter(dish => cuisines.indexOf(dish.cuisine) != -1);
      }

      let query = this.searchFilterService.getSearchQuery();
      dishes = dishes.filter(dish => dish.name.search(query)!=-1);

      return dishes;
    }

}
