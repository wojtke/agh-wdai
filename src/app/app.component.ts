import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zadanie6';

  counter: number = 0;
  increase_active: boolean = true;

  increase() {
    this.counter += 1;
    if (this.counter == 10) {
      this.increase_active = false;
    }
  }

  reset() {
    this.counter = 0;
    this.increase_active = true;
  }
}
