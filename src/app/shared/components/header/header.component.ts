import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

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
        command: () => this.toogleTheme(),
      },
    ];
  }

  toogleTheme(): void {
    let indexLastItem : number = this.items.length-1;
    this.items[indexLastItem].icon == 'pi pi-fw pi-moon'
      ? (this.items[indexLastItem].icon = 'pi pi-fw pi-sun')
      : (this.items[indexLastItem].icon = 'pi pi-fw pi-moon');
  }
}
