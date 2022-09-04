import { Pipe, PipeTransform } from '@angular/core';
import { UserList } from '../interface/user-list';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: UserList[], filteredUser: string) {
    if(value?.length === 0 || filteredUser === "") {
      return value;
    }

    const users = [];
    for (const user of value) {
      if (user['firstName'] === filteredUser) {
        users.push(user);
      }
    }
    return users;
  }

}
