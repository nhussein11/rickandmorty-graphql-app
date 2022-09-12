import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CharactersService } from '@app/shared/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnChanges {
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
