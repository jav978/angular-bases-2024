import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 30;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    
    return `${this.name} - ${this.age}`;
  }

  changeNameHero():void{
    this.name = 'Spiderman';
  }
  changeAgeHero():void{
    this.age = 25
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>Desde Agular</h1>'
    // } )

  }


}
