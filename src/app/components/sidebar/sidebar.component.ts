import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Categories } from 'src/app/Categories';
import { Cusines } from 'src/app/Cusines';
import { SearchFilterService } from 'src/app/services/search-filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories = Categories;
  cusines = Cusines;

  constructor(public searchFilterService: SearchFilterService) { }

  ngOnInit(): void {
  }

}
