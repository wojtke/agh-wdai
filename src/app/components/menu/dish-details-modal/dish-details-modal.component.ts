import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish, Review} from "src/app/models";
import {AccountService, CurrencyService, DishService, ReviewsService} from "src/app/services";

@Component({
  selector: 'app-dish-details-modal',
  templateUrl: './dish-details-modal.component.html',
  styleUrls: ['./dish-details-modal.component.css']
})
export class DishDetailsModalComponent implements OnInit {
  @Input() dish!: Dish;
  @Output() close = new EventEmitter();
  @Output() dismiss = new EventEmitter();

  reviews: Review[] = [];

  loading = true;

  dismissModal() {
    this.dismiss.emit();
  }

  ngOnInit() {
    this.loading = false;
    this.reviewService.getReviewsForDish(this.dish)
      .subscribe(reviews => {
        this.reviews = reviews
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }


  constructor(private dishListService: DishService,
              private reviewService: ReviewsService,
              public accountService: AccountService,
              public currencyService: CurrencyService) {}

}
