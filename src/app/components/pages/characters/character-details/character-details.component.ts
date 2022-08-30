import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/models/data.interface';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  @Input() characterDetails: Character = {} as Character;
  constructor() {}

  ngOnInit(): void {}
}
