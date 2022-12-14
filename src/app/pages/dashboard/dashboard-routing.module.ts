import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/guards/authentication.guard';
import { DashboardComponent } from './dashboard.component';
import { SourceCodeComponent } from '../source-code/source-code.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthenticationGuard] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
