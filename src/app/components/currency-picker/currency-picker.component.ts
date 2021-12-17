import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.css']
})
export class CurrencyPickerComponent implements OnInit {

  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

}
