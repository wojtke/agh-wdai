import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './components/menu/dish/dish.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/menu/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownMultiselectComponent } from './components/menu/sidebar/dropdown-multiselect/dropdown-multiselect.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyPipe } from './pipes/currency.pipe';
import { DishListComponent } from './components/menu/dish-list/dish-list.component';
import { SearchbarComponent } from './components/menu/sidebar/searchbar/searchbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { StarRatingComponent } from './components/menu/star-rating/star-rating.component';
import { PriceRangesliderComponent } from './components/menu/sidebar/price-rangeslider/price-rangeslider.component';
import { CurrencyPickerComponent } from './components/layout/header/currency-picker/currency-picker.component';
import { DishReviewComponent } from './components/menu/dish-review/dish-review.component';
import { DishReviewAddFormComponent } from './components/menu/dish-review-add-form/dish-review-add-form.component';
import { NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PaginateNavComponent } from './components/menu/paginate-nav/paginate-nav.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ManageMenuComponent } from './components/manage-menu/manage-menu.component';
import { DishDetailsModalComponent } from './components/menu/dish-details-modal/dish-details-modal.component';
import { DishAddModalComponent } from './components/manage-menu/dish-add-modal/dish-add-modal.component';
import { YesNoModalComponent } from './components/shared-ui/yes-no-modal/yes-no-modal.component';
import { OrderHistoryComponent } from './components/order-summary/order-history/order-history.component';
import { AdminPanelUserComponent } from './components/admin-panel/admin-panel-user/admin-panel-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    HeaderComponent,
    SidebarComponent,
    DropdownMultiselectComponent,
    CurrencyPipe,
    DishListComponent,
    SearchbarComponent,
    MenuComponent,
    WelcomeComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    StarRatingComponent,
    PriceRangesliderComponent,
    CurrencyPickerComponent,
    DishReviewComponent,
    DishReviewAddFormComponent,
    FooterComponent,
    PaginateNavComponent,
    AdminPanelComponent,
    ManageMenuComponent,
    DishDetailsModalComponent,
    DishAddModalComponent,
    YesNoModalComponent,
    OrderHistoryComponent,
    AdminPanelUserComponent,
  ],
  imports: [
    NgMultiSelectDropDownModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
