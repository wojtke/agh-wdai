import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Categories } from 'src/app/mock-data/Categories';
import { Cusines } from 'src/app/mock-data/Cusines';
import { SearchFilterService } from 'src/app/services/search-filter.service';
import { PaginateService } from 'src/app/services/paginate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories = Categories;
  cusines = Cusines;

  constructor(public searchFilterService: SearchFilterService, public paginate: PaginateService) { }

  ngOnInit(): void {
  }

}
