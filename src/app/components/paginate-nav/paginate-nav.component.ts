import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginate-nav',
  templateUrl: './paginate-nav.component.html',
  styleUrls: ['./paginate-nav.component.css']
})
export class PaginateNavComponent implements OnInit {
  @Input() page!: number;
  @Input() pagecount!: number;
  @Output() pageChange = new EventEmitter();

  right = faChevronRight;
  left = faChevronLeft;

  next() {
    if (this.page < this.pagecount) {
      this.pageChange.emit(this.page + 1);
    }
  }

  prev() {
    if (this.page > 1) {
      this.pageChange.emit(this.page - 1);
    }
  }

  getClass(side: string) {
    if (side === 'left') {
      return this.page === 1 ? 'icon-disabled' : 'icon';
    } else {
      return this.page === this.pagecount ? 'icon-disabled' : 'icon';
    }

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
