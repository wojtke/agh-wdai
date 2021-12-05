import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Output() inputNumberEvent = new EventEmitter();
  @Output() operationEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  inputNumber(i: string) {
    this.inputNumberEvent.emit(i);
  }

  operation(op: string) {
    this.operationEvent.emit(op);
  }

}
