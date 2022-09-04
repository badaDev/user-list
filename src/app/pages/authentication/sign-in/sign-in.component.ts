import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor( 
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
   ) {
    this.initializeForm();
    }

  ngOnInit(): void {
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['Enter Email', Validators.compose([Validators.required])],
      password: ['Enter Password', Validators.compose([Validators.required])]
    })
  }

  signInWithGoogle() {
    this.authService.GoogleAuth();
    // this.router.navigate(['sign-up']);
  }

  signinWithEmail() {
    // this.authService.SignInWithEmail()
  }
  

}
