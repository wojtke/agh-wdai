import { Component, OnInit } from '@angular/core';
import { DishListService } from 'src/app/services/dish-list.service';
import { SearchFilterService } from 'src/app/services/search-filter.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { Dish } from '../../models/Dish'
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';
import { PaginateService } from 'src/app/services/paginate.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  filter = FilterPipe;
  paginate = PaginatePipe;

  page = 1;
  loading = true;

  constructor(
    private dishListService: DishListService,
    public searchFilterService: SearchFilterService,
    public paginateService: PaginateService
    ) { }

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes(){
    this.loading = true;
    this.dishListService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
      this.loading = false;
    });
  }

  del(dish: Dish){
    this.dishListService.deleteDish(dish).subscribe( res =>{
       this.loadDishes()
      });
  }

  pageCount(){
    this.page = 1;
    return Math.ceil(this.dishes.length / this.paginateService.getPerPage());
  }

}