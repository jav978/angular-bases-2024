import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interface/character.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'add-dbz-character',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
 
  public character:Character = {
    name:'',
    power:0
  }

  emitCharacter():void{

    // console.log(this.character);
    
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name:'',power:0}
  }

}
