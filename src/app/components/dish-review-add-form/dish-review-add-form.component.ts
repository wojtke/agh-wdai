import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-dish-review-add-form',
  templateUrl: './dish-review-add-form.component.html',
  styleUrls: ['./dish-review-add-form.component.css']
})
export class DishReviewAddFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nick: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  submit(): void {
    console.log(this.form.value);
    this.form.reset();
  }

}
