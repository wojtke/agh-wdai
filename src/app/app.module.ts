import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './components/dish/dish.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishAddFormComponent } from './components/dish-add-form/dish-add-form.component';

import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownMultiselectComponent } from './components/dropdown-multiselect/dropdown-multiselect.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MenuComponent } from './view-templates/menu/menu.component';
import { DishAddComponent } from './view-templates/dish-add/dish-add.component';
import { WelcomeComponent } from './view-templates/welcome/welcome.component';
import { OrderComponent } from './view-templates/order/order.component';
import { NotFoundComponent } from './view-templates/not-found/not-found.component';
import { LoginComponent } from './view-templates/auth/login/login.component';
import { RegisterComponent } from './view-templates/auth/register/register.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { PriceRangesliderComponent } from './components/price-rangeslider/price-rangeslider.component';
import { DishDetailsComponent} from "./view-templates/dish-details/dish-details.component";
import { CurrencyPickerComponent } from './components/currency-picker/currency-picker.component';
import { DishReviewComponent } from './components/dish-review/dish-review.component';


@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    HeaderComponent,
    SidebarComponent,
    DishAddFormComponent,
    DropdownMultiselectComponent,
    CurrencyPipe,
    FilterPipe,
    DishListComponent,
    OrderListComponent,
    SearchbarComponent,
    MenuComponent,
    DishAddComponent,
    WelcomeComponent,
    OrderComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    StarRatingComponent,
    PriceRangesliderComponent,
    DishDetailsComponent,
    CurrencyPickerComponent,
    DishReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
