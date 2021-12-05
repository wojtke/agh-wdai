import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad6';

  cars = [
    {id: 1, brand: "BMW", model: "X5", color: ['black', 'red', 'white']},
    {id: 2, brand: "BMW", model: "i8", color: ["white"]},
    {id: 3, brand: "BMW", model: "M3", color: ['black', 'white']},
    {id: 4, brand: "Audi", model: "A4", color: ['black', 'red', 'white']},
    {id: 5, brand: "Audi", model: "A6", color: ["black"]},
    {id: 6, brand: "Opel", model: "Astra", color: ["red"]},
    {id: 7, brand: "Mercedes", model: "C", color: ["blue"]},
    {id: 8, brand: "Fiat", model: "126p", color: ["yellow", "green"]},
    {id: 9, brand: "Ford", model: "Focus", color: ["grey"]},
 ];


 get car_brands() {
   let brands = this.cars.map(car => car.brand);
   return Array.from(new Set(brands));
 }

 get car_models() {
  let selected_cars = this.cars.filter(car => car.brand == this.brand);
  return selected_cars.map(car => car.model);
 }

 get car_colors() {
  if (this.brand == null || this.model==null) return [];
  let selected_cars = this.cars.filter(car =>
     car.brand == this.brand && car.model == this.model);
  return selected_cars[0].color;
 }

 brand_change() {
   this.model = null;
   this.color = null;
   this.d = false;
 }
 model_change() {
   this.color = null;
 }
 color_change(color: string) {
    this.color = color;
 }

 brand: any = null;
 model: any = null;
 color: any = null;

 d: boolean = true;
}
