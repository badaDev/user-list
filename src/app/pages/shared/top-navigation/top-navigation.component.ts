import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavigationComponent implements OnInit {

  loggedInUser: any
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  logOutWithGoogle() {
    this.authService.SignOut();
  }

  getLoggedInUser() {
    this.loggedInUser = this.authService.userData;
    console.log(this.loggedInUser);
    
  }

}
