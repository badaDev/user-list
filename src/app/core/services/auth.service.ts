import { Injectable, NgZone } from '@angular/core';
// import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
// import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { User } from '../interface/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import * as alertify from 'alertifyjs';


// export const oAuthConfig: AuthConfig = {
//   issuer: "https://accounts.google.com",
//   strictDiscoveryDocumentValidation: false,
//   redirectUri: window.location.origin + '/',
//   clientId: "712339331956-vtg2u5pq2ddeor76pi8pn8rf1l7epbg9.apps.googleusercontent.com",
//   scope: "openid profile email"
// }



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data

  constructor(
    // private readonly oAuthService: OAuthService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router, // inject angular router
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { 
    // this.googleLogin();

    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
   }

  // googleLogin() {
  //   this.oAuthService.configure(oAuthConfig),
  //   this.oAuthService.tokenValidationHandler = new JwksValidationHandler;
  //   this.oAuthService.loadDiscoveryDocumentAndTryLogin().then( () => {
  //     this.oAuthService.tryLoginImplicitFlow().then( () => {
  //       if(!this.oAuthService.hasValidAccessToken) {
  //         this.oAuthService.initLoginFlow()
  //       } else {
  //         this.oAuthService.loadUserProfile().then((userProfile) => {
  //           console.log(JSON.stringify(userProfile));
            
  //         })
  //       }
  //     })
  //   })
  // }

  


  //this checks if the user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  //this Sign in the user with Google
  googleAuthSignIn() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['layout/dashboard']);
      alertify.success('Login Successful');
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      userId: user.uid,
      userEmail: user.email,
      userDisplayName: user.displayName,
      userPhotoURL: user.photoURL,
      userEmailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  //this Sign out the user
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
  
}
