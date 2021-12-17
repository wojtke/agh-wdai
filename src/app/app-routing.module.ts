import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './view-templates/menu/menu.component';
import { WelcomeComponent } from './view-templates/welcome/welcome.component';
import { DishDetailsComponent } from './view-templates/dish-details/dish-details.component';
import { DishAddComponent } from './view-templates/dish-add/dish-add.component';
import { OrderComponent } from './view-templates/order/order.component';
import { NotFoundComponent } from './view-templates/not-found/not-found.component';

const routes: Routes = [
  { path: 'menu/new', component: DishAddComponent },
  { path: 'menu/:id', component: DishDetailsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
