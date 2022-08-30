import { Component, OnInit } from '@angular/core';
import { CharactersService } from '@app/shared/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters$ = this._charactersSerivce.characters$;
  constructor(private _charactersSerivce:CharactersService) { }

}
