import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DishListService } from '../../services/dish-list.service';
import { Dish } from '../../Dish';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  getOrderList() {
    let orderList: Dish[] = [];
    this.cartService.getOrders().forEach((count, id) => {
      let dish = this.dishListService.getDishById(id);
      for (let i = 0; i < count; i++) {
        orderList.push(dish);
      }
    });
  }

  constructor(public cartService: CartService, public dishListService: DishListService) { }

  ngOnInit(): void {
  }

}
