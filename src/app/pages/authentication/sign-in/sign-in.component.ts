import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

import * as alertify from 'alertifyjs';


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
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    })
  }

  signInWithGoogle() {
    this.authService.GoogleAuth();
  }

  signinWithEmail() {
    if(this.loginForm.valid) {
      this.authService.SignInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }
    
  }
  

}
