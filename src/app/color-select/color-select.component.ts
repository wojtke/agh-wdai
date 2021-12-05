import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit {
  @Input() colors!: any;
  @Output() colorSelected = new EventEmitter<string>();

  onColorSelected(color: string) {
    this.colorSelected.emit(color);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
