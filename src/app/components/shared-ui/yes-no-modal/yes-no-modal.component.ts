import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-yes-no-modal',
  templateUrl: './yes-no-modal.component.html',
  styleUrls: ['./yes-no-modal.component.css']
})
export class YesNoModalComponent implements OnInit {
  @Input() text: string = "Yes or no?";
  @Output() yes = new EventEmitter();
  @Output() no = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  yesClick() {
    this.yes.emit();
  }
  noClick() {
    this.no.emit();
  }

}
