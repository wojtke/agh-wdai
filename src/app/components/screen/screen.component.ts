import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  @Input() value: string = '';
  @Input() upperText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
