import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserList } from '../interface/user-list';

const userListApi: string = "https://res.cloudinary.com/dywqrl9ia/raw/upload/v1661851924/data_f5kq6n.json"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient
  ) { }


  searchUser(query: string) {
    return this.httpClient.post<UserList>(userListApi, {query})
      .pipe(
        map((data) => {
          return data;
        })
      )
  }
}
