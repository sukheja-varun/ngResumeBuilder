import { Injectable } from '@angular/core';

import { User } from './user-info.model';
import { dummyUser } from './dummy-user.data';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private user: User = dummyUser;

  constructor() { }

  setUserData(user: User) {
    this.user = user;
  }

  getUserData(): User {
    return this.user;
  }
}
