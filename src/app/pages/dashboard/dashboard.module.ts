import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from 'src/app/core/pipes/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserFilterPipe } from 'src/app/core/pipes/userFilter.pipe';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SourceCodeComponent } from '../source-code/source-code.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SearchFilterPipe,
    UserFilterPipe,
    SourceCodeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AutocompleteLibModule
    
  ]
})
export class DashboardModule { }
