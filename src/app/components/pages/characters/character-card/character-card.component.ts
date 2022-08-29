import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/models/data.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character = {} as Character;
  constructor() { }

  ngOnInit(): void {
  }

}
