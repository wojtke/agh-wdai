import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {AccountService, ReviewsService} from "../../../services";
import {Dish} from "../../../models";

@Component({
  selector: 'app-dish-review-add-form',
  templateUrl: './dish-review-add-form.component.html',
  styleUrls: ['./dish-review-add-form.component.css']
})
export class DishReviewAddFormComponent implements OnInit {
  @Input() dish!: Dish;
  form!: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private reviewService: ReviewsService, public accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.accountService.refreshUserDetails();
  }

  get reviewData() {
    return {
      title: this.form.value.title,
      body: this.form.value.body,
      rating: this.form.value.rating,
      dish_id: this.dish._id,
      user_id: this.accountService.user?._id,

      added_date: new Date().toString()
    }
  }

  submit(): void {
    this.loading = true;
    if (this.form.valid) {
      this.reviewService.addReview(this.reviewData)
        .subscribe(() => {
          this.form.reset();
          this.loading = false;
        }, error => {
          console.error(error);
          this.loading = false;
        });
      this.form.reset();
    }
  }

}
