import { Injectable } from '@angular/core';

import { User, PersonalInfo, Experience, Skill, Language, Hobby } from './user-info.model';
import { dummyUser } from './dummy-user.data';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private user: User = dummyUser;

  constructor() { }

  getUserData(): User {
    return this.user;
  }

  setUserData(user: User) {
    this.user = user;
  }
}
