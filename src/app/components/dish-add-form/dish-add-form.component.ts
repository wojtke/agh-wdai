import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dish } from '../../Dish';
import { Categories } from 'src/app/Categories';
import { Cusines } from 'src/app/Cusines';
import { DishListService } from 'src/app/services/dish-list.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dish-add-form',
  templateUrl: './dish-add-form.component.html',
  styleUrls: ['./dish-add-form.component.css']
})
export class DishAddFormComponent implements OnInit {
  form!: FormGroup;

  categories = Categories;
  cusines = Cusines;

  constructor(
    private formBuilder: FormBuilder, 
    private modalService: NgbModal,
    private dishListService: DishListService
    ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required]],
      cusine: ['', [Validators.required]],
      categories: ['', [Validators.required]],
    });
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  get new_dish(): Dish {
    return {
      id: 0,
      name: this.form.value.name,
      cusine: this.form.value.cusine,
      categories: this.form.value.categories,
      price: this.form.value.price,
      ingredients: [],
      max_orders: 10,
      image_src: ''
    };
  }
 
  submit() {
    console.log(this.form.value);
    this.dishListService.addDish(this.new_dish);
    this.form.reset();
  }
}


//TODO move to view-templates