import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown-multiselect',
  templateUrl: './dropdown-multiselect.component.html',
  styleUrls: ['./dropdown-multiselect.component.css']
})
export class DropdownMultiselectComponent implements OnInit {
  @Input() name: string = 'Wybierz';
  @Input() items!: string[];
  @Input() disabled: boolean = false;
  @Output() onSelectedChange = new EventEmitter<string[]>();

  selectedChange(){
    this.onSelectedChange.emit(this.selectedItems);
  }

  selectedItems: any;

  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  get chevron_icon(): any {
    return this.isCollapsed ? faChevronRight : faChevronDown;
  }

}
