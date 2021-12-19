import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dish } from '../../models/Dish';
import { DishListService } from 'src/app/services/dish-list.service';
import { ReviewsService} from "../../services/reviews.service";
import { Review } from "../../models/Review";

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private dishListService: DishListService, private reviewService: ReviewsService) { }
  dish!: Dish;
  reviews!: Review[];

  loading = true;

  ngOnInit() {
    let id = '2';
    this.routeSub = this.route.params.subscribe(params => {
      id = params['id'];
    });

    this.dishListService.getDishById(id).subscribe( dish => {
      this.dish = dish;
      this.loading = false;
    });

    this.reviews = this.reviewService.getReviews(this.dish._id);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
