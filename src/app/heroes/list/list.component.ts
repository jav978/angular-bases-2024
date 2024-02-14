import { NgFor,NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [ListComponent,NgFor,NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Thor','Ironman','Hulk','Ant man','She Hulk','Deadpool','Hawk Eye','Captain America','Vision'];

  public deleteHero?: string = '';


  public remoteLastHero():void {
    this.deleteHero = this.heroNames.pop();
  }

}
