import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  counter = 10;
  increment(valor: number) {
    this.counter += valor;
  }
  reset() {
    this.counter = 10;
  }
}
