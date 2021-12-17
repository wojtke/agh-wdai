import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dish } from '../../Dish';
import { DishListService } from 'src/app/services/dish-list.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private dishListService: DishListService) { }
  dish!: Dish;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.dish = this.dishListService.getDishById(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
