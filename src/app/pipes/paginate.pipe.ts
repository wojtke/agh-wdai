import { Pipe, PipeTransform } from '@angular/core';
import { Dish } from '../models/Dish';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  transform(dishes: Dish[], page: number, per_page: number): Dish[] {
    return dishes.slice((page - 1) * per_page, page * per_page);
  }

}
