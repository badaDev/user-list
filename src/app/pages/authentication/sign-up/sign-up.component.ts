import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initializeForm();
   }

  ngOnInit(): void {
  }

  initializeForm() {
    this.signUpForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    })
  }

  signUpWithEmail() {
    if(this.signUpForm.valid) {
      this.authService.SignUpWithEmail(this.signUpForm.get('email').value, this.signUpForm.get('password').value);
      this.router.navigate(['/'])
      console.log("user registered");
    }
    
    
  }
}
