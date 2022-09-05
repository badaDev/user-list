import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/app/core/interface/user-list';
import { UserListService } from 'src/app/core/services/user-list.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allUsers: any;

  keyword = 'firstName';
  userNotFound = 'user not found'

  filteredUser: any;

  


  
  constructor(
    private userListService: UserListService,
  ) { }

  ngOnInit(): void {
    this.getAllUserList();
    // this.filteredUser = this.allUsers;
  }

  //this function makes the API call for the list of users using the injected userListService
  getAllUserList() {
    this.userListService.getUserList()
      .subscribe(
        (res) => {
          console.log(res);
          this.allUsers = res['data']
          
        }
      )
  }


  

}
