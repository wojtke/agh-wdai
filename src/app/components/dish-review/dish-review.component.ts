import {Component, Input, OnInit} from '@angular/core';
import { Review} from "../../models/Review";

@Component({
  selector: 'app-dish-review',
  templateUrl: './dish-review.component.html',
  styleUrls: ['./dish-review.component.css']
})
export class DishReviewComponent implements OnInit {
  @Input() review!: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
