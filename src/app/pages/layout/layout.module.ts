import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from '../shared/side-navigation/side-navigation.component';
import { TopNavigationComponent } from '../shared/top-navigation/top-navigation.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    TopNavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
