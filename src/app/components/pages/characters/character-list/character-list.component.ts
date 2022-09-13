import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/models/data.interface';
import { CharactersService } from '@app/shared/services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters$!: Observable<Character[]>;
  
  constructor(private _charactersSerivce: CharactersService) {}
  
  ngOnInit(): void {
    this.characters$ = this._charactersSerivce.getDataApi();
  }
}
