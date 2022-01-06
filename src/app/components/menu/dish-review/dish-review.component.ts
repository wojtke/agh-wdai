import {Component, Input, OnInit} from '@angular/core';
import { Review } from "src/app/models";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-dish-review',
  templateUrl: './dish-review.component.html',
  styleUrls: ['./dish-review.component.css']
})
export class DishReviewComponent implements OnInit {
  @Input() review!: Review;
  author: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.review.user_id)
      .subscribe(user => {
      this.author = user.name;
    });
 }

}
