import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


console.log(uuid())

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 10000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9500
  }, {
    id: uuid(),
    name: 'Trunks',
    power: 8500
  }, {
    id: uuid(),
    name: 'Gohan',
    power: 8000
  }, {
    id: uuid(),
    name: 'Piccolo',
    power: 7000
  }]

  addCharacter(character: Character): void {
    const newCharacter = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(i: number) {
  // this.characters.splice(i, 1);
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id)
  }

  constructor() { }

}
