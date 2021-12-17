import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() initialStars: number = 2;
  @Input() editable: boolean = true;
  @Output() starsChanged = new EventEmitter<number>();

  farStar = farStar;
  fasStar = fasStar;

  starsNumber: number = 0;
  starsHoverNumber: number = 0;

  getIcon(i: number) {
     return i<=this.starsHoverNumber ? fasStar:farStar;
  }
  getClass(i:number) {
    return i<=this.starsNumber ? "icon-saved":"icon-normal";
  }

  hover(i: number) {
    this.starsHoverNumber=i;
  }
  clearHover() {
    this.starsHoverNumber = this.starsNumber;
  }
  save(i: number) {
    this.starsNumber=i;
    this.starsChanged.emit(i);
  }

  constructor() { }

  ngOnInit(): void {
    this.starsNumber = this.initialStars;
    this.starsHoverNumber = this.initialStars;
  }

}
