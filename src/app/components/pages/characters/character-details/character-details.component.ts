import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
  } from '@angular/core';
  import { Character } from '@app/shared/models/data.interface';
  
  @Component({
    selector: 'app-character-details',
    templateUrl: './character-details.component.html',
    styleUrls: ['./character-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class CharacterDetailsComponent {
    @Input() character: Character = {} as Character;
    @Input() display: boolean = false;
    @Output() dialogClosed = new EventEmitter<boolean>();
  
    closeDialog(): void {
      this.dialogClosed.emit(false);
    }
  }