import { Component, OnInit } from '@angular/core';
import { DishListService } from 'src/app/services/dish-list.service';
import { SearchFilterService } from 'src/app/services/search-filter.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { Dish } from '../../Dish'

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = this.dishListService.getDishes();
  filter = FilterPipe;

  constructor(
    public dishListService: DishListService, 
    public searchFilterService: SearchFilterService,  
    ) { }

  ngOnInit(): void {
  }

}

//TODO move to view-templates