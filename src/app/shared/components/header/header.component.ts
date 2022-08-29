import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/shared/services/theme.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private _themeService: ThemeService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
      },
      { label: 'Characters', icon: 'pi pi-fw pi-users' },
      { label: 'Episodes', icon: 'pi pi-fw pi-play' },
      {
        label: 'Theme',
        icon: 'pi pi-fw pi-moon',
        command: () => this.swtichTheme(),
      },
    ];
  }

  swtichTheme(): void {
    let indexLastItem: number = this.items.length - 1;
    this.items[indexLastItem].icon == 'pi pi-fw pi-moon'
      ? (
        this.items[indexLastItem].icon = 'pi pi-fw pi-sun',
        this._themeService.swtichTheme('lightDeepPurple')
        )
      : (
        this.items[indexLastItem].icon = 'pi pi-fw pi-moon',
        this._themeService.swtichTheme('darkDeepPurple')
        );
  }
}
