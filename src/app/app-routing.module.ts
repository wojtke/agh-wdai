import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './view-templates/menu/menu.component';
import { WelcomeComponent } from './view-templates/welcome/welcome.component';
import { DishDetailsComponent } from './view-templates/dish-details/dish-details.component';
import { DishAddComponent } from './view-templates/dish-add/dish-add.component';
import { OrderComponent } from './view-templates/order/order.component';
import { NotFoundComponent } from './view-templates/not-found/not-found.component';
import {LoginComponent} from "./view-templates/auth/login/login.component";
import {RegisterComponent} from "./view-templates/auth/register/register.component";
import {AdminPanelComponent} from "./view-templates/admin-panel/admin-panel.component";
import {ManageMenuComponent} from "./view-templates/manage-menu/manage-menu.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admin', component: AdminPanelComponent},

  { path: 'menu/manage', component: ManageMenuComponent},
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
