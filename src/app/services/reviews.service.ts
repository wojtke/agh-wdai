import { Injectable } from '@angular/core';
import { reviews } from "../mock-data/reviews";
import { Review} from "../models/Review";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  reviews = reviews;

  getReviews(dish_id: number) {
    return reviews.filter( (review)=> review.dish_id==dish_id);
  }

  constructor() { }
}
