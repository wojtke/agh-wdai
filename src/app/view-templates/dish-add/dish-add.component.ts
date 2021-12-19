import { Component, OnInit } from '@angular/core';
import { DishListService } from "../../services/dish-list.service";
import { Dish } from "../../models/Dish";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Categories} from "../../mock-data/Categories";
import {Cusines} from "../../mock-data/Cusines";
import {Ingredients} from "../../mock-data/Ingredients";

@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.css']
})
export class DishAddComponent implements OnInit {
  form!: FormGroup;

  loading = false;

  blank_img_src = "/assets/images/blank.jpg";

  categories = Categories;
  cusines = Cusines;
  ingredients = Ingredients;

  constructor(
    private formBuilder: FormBuilder,
    public dishListService: DishListService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      cusine: ['', [Validators.required]],
      categories: ['', [Validators.required]],
      ingredients: ['', [Validators.required]],
    });
  }

  get new_dish(): Dish {
    return {
      id: 0,
      name: this.form.value.name,
      cusine: this.form.value.cusine,
      categories: this.form.value.categories,
      price: this.form.value.price,
      ingredients: this.form.value.ingredients,
      max_orders: 10,
      image_src: this.blank_img_src
    };
  }

  submit() {
    this.loading = true;
    this.dishListService.addDish(this.new_dish).subscribe(
      res => {
        console.log(res);
        this.form.reset();
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
