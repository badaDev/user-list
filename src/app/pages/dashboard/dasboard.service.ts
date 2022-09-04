import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


const userListApi: string = "https://res.cloudinary.com/dywqrl9ia/raw/upload/v1661851924/data_f5kq6n.json"

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserList() {
   return this.httpClient.get<any>(userListApi)
      .pipe(
        map((userList) => {
          return userList;
        })
      )
  }
}
