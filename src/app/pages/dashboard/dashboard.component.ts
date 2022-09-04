import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/app/core/interface/user-list';
import { PostService } from 'src/app/core/services/post.service';
import { DasboardService } from './dasboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // allUsers: UserList[];

  allUsers: any;

  userSearchInput: any; 

  searchValue: string;

  inputText: string;

  //auto complete lib module
  keyword = 'firstName';


  //
  _filterText: string = ""
  filteredUser: any;

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredUser = this.filteredUserByName(value);
  }

  // userList: UserList[];

  
  constructor(
    private userListService: DasboardService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getAllUserList();
    // this.filteredUser = this.allUsers;
  }

  //this function makes the API call for the list of users
  getAllUserList() {
    this.userListService.getUserList()
      .subscribe(
        (res) => {
          console.log(res);
          this.allUsers = res['data']
          
        }
      )
  }

  sendData(event: any) {
    console.log(event.target.value);
    // let query: string = event.target.value;

    // this.postService.searchUser(query.trim())
    //   .subscribe(
    //     (res) => {
    //       console.log(res);
    //       this.userSearchInput = res;
    //     }
    //   )
    
  }

  //this function is to search through the table

  // search() {
  //   if(this.searchValue == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.allUsers = this.allUsers.filter(res => {
  //       return res.searchValue.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
  //     })
  //   }
  // }



  //this function makes use of the get and set
  filteredUserByName(filterTerm: string) {
    if(this.allUsers?.length === 0 || this.filterText === "") {
      return this.allUsers;
    } else {
      return this.allUsers?.filter((user) => {
        return user.firstName?.toLowerCase() === filterTerm?.toLowerCase();
      })
    }
  }


  //this function will check if what we have in the inputText is inside the allUsers

  checkForText(value: string) {

  }


  //find an object in the array of users
  findObj() {
    this.allUsers.filter((obj) => {
      if(obj.firstName === this.inputText) {
        console.log("user found");
      } else {
        console.log("user not found");
        
      }
      
      
      // return obj.firstName === this.inputText;
      
    })
    
  }


}
