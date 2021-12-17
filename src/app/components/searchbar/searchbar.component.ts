import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  searchText: string = "";
  
  search() {
    this.onSearch.emit(this.searchText);
  }

  updateIfCleared() {
    if (this.searchText.length === 0){
      this.onSearch.emit("");
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
