import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {ManageMenuComponent} from "./components/manage-menu/manage-menu.component";
import {AdminGuard, ManagerGuard, UserGuard} from "./guards";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},

  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},

  { path: 'menu/manage', component: ManageMenuComponent, canActivate: [ManagerGuard]},

  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderSummaryComponent, canActivate: [UserGuard] },
  { path: '', component: WelcomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
