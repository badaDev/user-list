import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceCodeComponent } from '../source-code/source-code.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', 
    component: LayoutComponent, 
    children: [
      { path: 'dashboard', 
        loadChildren: () => 
        import('../dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      {
        path: 'source-code', component: SourceCodeComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
