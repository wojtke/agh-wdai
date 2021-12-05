import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Categories } from 'src/app/Categories';
import { Cusines } from 'src/app/Cusines';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories = Categories;
  cusines = Cusines;
  @Output() categoriesChange = new EventEmitter<string[]>();
  @Output() cusinesChange = new EventEmitter<string[]>();

  onCategoriesChange(categories: string[]) {
    this.categoriesChange.emit(categories);
  }

  onCusinesChange(cusines: string[]) {
    this.cusinesChange.emit(cusines);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
