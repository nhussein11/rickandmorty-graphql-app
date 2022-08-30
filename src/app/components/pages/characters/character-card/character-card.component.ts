import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '@app/shared/models/data.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  @Input() character: Character = {} as Character;
  display: boolean = false;

  openDialog(): void {
    this.display=true;
  }
  dialogClosed(display:boolean):void{
    this.display=false;
  }
}
