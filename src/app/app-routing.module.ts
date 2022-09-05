import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { SignInComponent } from './pages/authentication/sign-in/sign-in.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'sign-in',
  //   pathMatch: 'full'
  // },
  {
    path: '', component: SignInComponent
  },

  { path: 'layout', 
    loadChildren: () => 
    import('./pages/layout/layout.module').then(m => m.LayoutModule) 
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
