import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 0;
  storedValue: number = 0;
  op: string = "";

  get valueStr() {
    return this.value.toString();
  }

  get upperText() {
      return this.storedValue.toString() + this.op;
  }

  inputNumber(i: string) {
    this.value = parseFloat(this.valueStr + i);
  }

  operation(op: string) {
    switch (op) {
      case 'ce':
        this.storedValue = 0;
        this.value = 0;
        this.op = "";
        break;
      case 'c':
        this.value = 0;
        break;
      case '=':
        if (this.op != "") {
          this.value = eval(this.storedValue + this.op + this.value);
          this.storedValue = 0;
          this.op = "";
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (this.op == "") {
          this.storedValue = this.value;
        } else {
          this.storedValue = eval(this.storedValue + this.op + this.value);
        }
        this.op = op;
        this.value = 0; 
        break;

      case "<":
        this.value = parseFloat(this.valueStr.slice(0, -1)) || 0;
        break;
    }  
  }
}
