import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string = 'ironman';
  age: number = 45;
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = 'Claudio'
  }

  changeAge(): void {
    this.age = 25
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
