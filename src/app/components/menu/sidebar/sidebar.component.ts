import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/mock-data/Categories';
import { Cuisines } from 'src/app/mock-data/Cuisines';
import { SearchFilterService, PaginateService} from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories = Categories;
  cuisines = Cuisines;

  constructor(public searchFilterService: SearchFilterService, public paginate: PaginateService) { }

  ngOnInit(): void {
  }

}
