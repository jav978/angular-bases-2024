import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-dbz-main-page',
	imports: [ListComponent,AddCharacterComponent],	
	standalone: true,
	templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
	constructor(private  dbzService: DbzService){}

	get characters(): Character[]{
		return [...this.dbzService.characters]
	}


	onDeleteCharacter(id: string):void {
		this.dbzService.deleteCharacterById(id);
	}

	onNewCharacter(character: Character):void {
		this.dbzService.addCharacter(character);
	}
	
}