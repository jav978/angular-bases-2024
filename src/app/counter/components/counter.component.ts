import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AppComponent],
  template: `
    <h3 class="text-2xl font-bold">Counter: {{ counter }}</h3>

    <button
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-4"
      (click)="incrementar(1)"
    >
      +1
    </button>

    <button
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-4"
      (click)="resetCounter()"
    >
      Reset
    </button>

    <button
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-4"
      (click)="decrementar(1)"
    >
      -1
    </button>
  `,
  styles: ``,
})
export class CounterComponent {
  public counter: number = 10;

  incrementar(value: number): void {
    this.counter += value;
  }

  decrementar(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
