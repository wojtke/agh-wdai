import { Pipe, PipeTransform } from '@angular/core';
import { Dish } from 'src/app/Dish';
import { SearchFilterService } from '../services/search-filter.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private searchFilterService: SearchFilterService) {}
//FIXME fix the pipe
  transform(dishes: Dish[]): Dish[] {
        let priceRange = this.searchFilterService.getPriceRange()
        dishes = dishes.filter(dish => priceRange[0] < parseFloat(dish.price.slice(1)) && priceRange[1] > parseFloat(dish.price.slice(1)));

        dishes = dishes.filter(dish => true);

        let categories = this.searchFilterService.getCategories();
        dishes = dishes.filter(dish => !dish.categories
          .every(category => categories.indexOf(category) != -1));
        
        let cusines = this.searchFilterService.getCusines();
        dishes = dishes.filter(dish => cusines.indexOf(dish.cusine) != -1);
        
        return dishes;
    }

}
