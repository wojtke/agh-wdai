import {Component, Input, OnInit} from '@angular/core';
import { DishesTransform} from 'src/app/services';
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
  loading = true;

  constructor(
    public dishesTransformService: DishesTransform,
    ) { }

  ngOnInit(): void {
    this.loading = true;
    this.dishesTransformService.refreshDishes();
    this.dishesTransformService.paginatedDishes.subscribe(dishes => {
      console.log(dishes);
      this.dishes = dishes;
    });
    timer(3000).subscribe( val=> {this.loading = false;})
  }


}
