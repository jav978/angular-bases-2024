import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { NgFor,NgClass } from '@angular/common';



@Component({
  standalone: true,
  imports: [NgFor,NgClass],
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
 // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete = new EventEmitter<string>();
  
  onDeleteCharacter(id?:string):void{
  
    if (!id) return;

    this.onDelete.emit(id)
    
    console.log({id})

  }
}
