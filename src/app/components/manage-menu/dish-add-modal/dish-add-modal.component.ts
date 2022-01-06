import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DishService} from "src/app/services";
import {Categories} from "../../../mock-data/Categories";
import {Cuisines} from "../../../mock-data/Cuisines";
import {Ingredients} from "../../../mock-data/Ingredients";
import {Dish} from "src/app/models";

@Component({
  selector: 'app-dish-add-modal',
  templateUrl: './dish-add-modal.component.html',
  styleUrls: ['./dish-add-modal.component.css']
})
export class DishAddModalComponent implements OnInit {
  @Input() dishToEdit: Dish | null = null;
  @Output() close = new EventEmitter();
  @Output() dismiss = new EventEmitter();
  form!: FormGroup;
  loading = false;

  //TODO GET FROM API ENDPOint
  categories = Categories;
  cuisines = Cuisines;
  ingredients = Ingredients;

  constructor(private formBuilder: FormBuilder,
              public dishListService: DishService) { }

  ngOnInit() {
    if (this.dishToEdit==null) {
      this.form = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required]],
        desc: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        cuisine: ['', [Validators.required]],
        categories: ['', [Validators.required]],
        ingredients: ['', [Validators.required]],
        max_orders: ['', [Validators.required]],
      });
    } else{
      this.form = this.formBuilder.group({
        name: [this.dishToEdit.name, [Validators.required, Validators.minLength(3)]],
        price: [this.dishToEdit.price, [Validators.required]],
        desc: [this.dishToEdit.desc, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        cuisine: [this.dishToEdit.cuisine, [Validators.required]],
        categories: [this.dishToEdit.categories, [Validators.required]],
        ingredients: [this.dishToEdit.ingredients, [Validators.required]],
        max_orders: [this.dishToEdit.max_orders, [Validators.required]],
      });
    }

  }

  get new_dish() {
    return {
      name: this.form.value.name,
      cuisine: this.form.value.cuisine,
      categories: this.form.value.categories,
      desc: this.form.value.desc,
      price: this.form.value.price,
      ingredients: this.form.value.ingredients,
      max_orders: this.form.value.max_orders,
      image_src: ['https://source.unsplash.com/collection/64437775/400x400', 'https://source.unsplash.com/collection/251966/400x400'],
    };
  }

  closeModal() {
    this.close.emit();
  }
  dismissModal() {
    this.dismiss.emit();
  }


  submit() {
    this.loading = true;

    if (this.dishToEdit == null) {
      this.dishListService.addDish(this.new_dish)
        .subscribe(
          res => {
            if (res == 200) {
              this.loading = false;
              this.form.reset();
              this.closeModal();
              this.dishListService.refreshDishes();
            } else if (res !=0){
              this.loading = false;
              console.log("Something gone wrong addin", res)
            }
          },
          error => {
            console.log(error)
            this.loading = false;
          });

    } else {

      this.dishListService.updateDish(this.dishToEdit._id, this.new_dish)
        .subscribe(
          res => {
            if (res == 200) {
              this.loading = false;
              this.form.reset();
              this.closeModal();
              this.dishListService.refreshDishes();
            } else if (res !=0){
              this.loading = false;
              console.log("Something gone wrong updatin", res)
            }
          },
          error => {
            console.log(error)
            this.loading = false;
          });
    }

  }
}
