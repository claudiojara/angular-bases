import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroesNames = ['Superman', 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  lastHeroeRemoved?: string;

  removeLastHeroe(): void {
    this.lastHeroeRemoved = this.heroesNames.pop();
  }
}
