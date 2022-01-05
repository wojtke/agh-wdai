import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: StarRatingComponent
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {
  @Input() initialStars: number = 2;
  @Input() editable: boolean = true;
  @Input() size: number = 12;

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
    this.onChange(this.starsNumber);
    this.onTouched();
  }

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.starsNumber = this.initialStars;
    this.starsHoverNumber = this.initialStars;
  }

  onChange = (stars: number) => {};
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  touched = false;
  onTouched = () => {};
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  disabled=false;
  setDisabledState(isDisabled: boolean): void {
    this.disabled = true;
  }

  writeValue(rating: number): void {
    this.starsNumber = rating;
    this.starsHoverNumber = rating;
  }

}
