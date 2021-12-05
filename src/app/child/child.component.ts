import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() increase_active: boolean = true;
  @Output() onIncrease = new EventEmitter(); 
  @Output() onReset = new EventEmitter();

  increase() {
    this.onIncrease.emit();
  }

  reset() {
    this.onReset.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
