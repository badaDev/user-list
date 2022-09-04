import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  constructor( 
    public authService: AuthService,
    private router: Router
   ) { }

  ngOnInit(): void {
  }

  signInWithGoogle() {
    this.authService.GoogleAuth();
    // this.router.navigate(['sign-up']);
  }

  signinWithEmail() {
    // this.authService.SignIn()
  }
  

}
