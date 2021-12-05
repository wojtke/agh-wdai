import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  @Input() text!: string;
  @Input() color?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
