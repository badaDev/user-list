import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';
import { UserList } from '../interface/user-list';

@Pipe({
  name: 'search-filter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(allUser: UserList[], searchValue: string): UserList[] {
    if (!allUser || !searchValue) {
      return allUser;
    }
    return allUser.filter(allTheUsers => allTheUsers.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
