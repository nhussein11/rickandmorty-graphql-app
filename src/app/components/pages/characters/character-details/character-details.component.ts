import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Character } from '@app/shared/models/data.interface';
import { CharactersService } from '@app/shared/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnChanges {
  // @Input() character: Character = {} as Character;
  @Input() id!: number;
  @Input() display: boolean = false;
  @Output() dialogClosed = new EventEmitter<boolean>();

  constructor(private _charactersSerivce: CharactersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.id)
    
  }

  closeDialog(): void {
    this.dialogClosed.emit(false);
  }
}
