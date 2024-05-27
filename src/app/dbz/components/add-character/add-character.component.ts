import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { isJSDocAuthorTag } from 'typescript';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  character: Character = {
    name: 'Claudio',
    power: 0
  }



  emitCharacter() {
    console.log(this.character);
    if (this.character.name.trim().length === 0) return;
    if (this.character.power < 0) return;

    this.onNewCharacter.emit({ ...this.character });

    this.character.name = '';
    this.character.power = 0;
  }

}

