import { Injectable } from '@angular/core';
import { Review } from "../models/Review";
import {HttpClient} from "@angular/common/http";
import {Dish} from "../models";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  addReview(data: any) {
    return this.http.post<Review>('/api/reviews', data);
  }

  getReviewsForDish(dish: Dish) {
    return this.http.get<Review[]>('/api/reviews/dish/' + dish._id);
  }

  constructor(private http: HttpClient) { }
}
