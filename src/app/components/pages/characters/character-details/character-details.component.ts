import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CharacterDetails } from '@app/shared/models/data.interface';
import { CharactersService } from '@app/shared/services/characters.service';
import { gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

const QUERY = gql`
query Characters($name: String) {
  characters(filter: {name: $name}) {
    results {
      name
      status
      species
      gender
      image
      type
      location {
        name
      }
    }
  }
}
`;

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnChanges {
  @Input() nameToFilter!: string;
  @Input() display: boolean = false;
  @Output() dialogClosed = new EventEmitter<boolean>();

  characterDetails$!: Observable<CharacterDetails>;

  constructor(private _charactersService: CharactersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const FILTER = { name: this.nameToFilter };
    this.characterDetails$ = this._charactersService.getDataApi(QUERY, FILTER).pipe(
      map((character) => {
        return character[0];
      })
    );    
  }

  closeDialog(): void {
    this.dialogClosed.emit(false);
  }
}
