import {Component, Input, OnInit} from '@angular/core';
import { DishService, SearchFilterService, PaginateService} from 'src/app/services';
import { FilterPipe, PaginatePipe} from 'src/app/pipes';
import { Dish } from 'src/app/models'
import {timer} from "rxjs";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  @Input() manage: boolean = false;
  dishes: Dish[] = [];
  filter = FilterPipe;
  paginate = PaginatePipe;

  page = 1;
  loading = true;

  constructor(
    private dishService: DishService,
    public searchFilterService: SearchFilterService,
    public paginateService: PaginateService
    ) { }

  ngOnInit(): void {
    this.loading = true;
    this.dishService.refreshDishes();
    this.dishService.dishes.subscribe(dishes => {
      this.dishes = dishes;
    });
    timer(3000).subscribe( val=> {this.loading = false;})
  }


  pageCount(){ //TODO fix pagination
    this.page = 1;
    return Math.ceil(this.dishes.length / this.paginateService.getPerPage());
  }

}
