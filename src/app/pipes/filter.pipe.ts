import { Pipe, PipeTransform } from '@angular/core';
import { Dish } from 'src/app/Dish';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dishes: Dish[], categories: string[], cusines: string[] ): Dish[] {
    return dishes.filter(dish => {
      if (categories.length > 0 && dish.categories.every(category => {
                return categories.indexOf(category) === -1;
              })) {
        return false;
      }
      if (cusines.length > 0 && cusines.indexOf(dish.cusine) === -1) {
        return false;
      }
      return true;
    });

  }
}
