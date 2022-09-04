import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  collapsed = true;
  navData = navbarData;
  currentYear: number = new Date().getFullYear();
  

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleCollapse(): void {
    // this.collapsed = !this.collapsed;
  }

  closeSidenav(): void {
    this.collapsed = false;
  }

}
