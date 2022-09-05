import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


const userListApi: string = "https://res.cloudinary.com/dywqrl9ia/raw/upload/v1661851924/data_f5kq6n.json"

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //makes the API call to fetch user list
  getUserList() {
   return this.httpClient.get<any>(userListApi)
      .pipe(
        map((userList) => {
          return userList;
        })
      )
  }
}
