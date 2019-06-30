import { Injectable } from '@angular/core';

import { User, PersonalInfo, Experience, Skill, Language, Hobby } from './user-info.model';
import { dummyUser } from './dummy-user.data';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  // private personalInfo: PersonalInfo;
  // private experiences: Experience[];
  // private skills: Skill[];
  // private languages: Language[];
  // private hobbies: Hobby[];

  private user: User = dummyUser;

  constructor() { }

  getUserData(): User {
    return this.user;
  }

  setUserData(user: User) {
    this.user = user;
  }

  setPersonalInfo(personalInfo: PersonalInfo) {
    this.user.personalInfo = personalInfo;
  }

  setExperiences(experiences: Experience[]) {
    this.user.experiences = experiences;
  }

  setSkills(skills: Skill[]) {
    this.user.skills = skills;
  }

  setLanguages(languages: Language[]) {
    this.user.languages = languages;
  }

  setHobbies(hobbies: Hobby[]) {
    this.user.hobbies = hobbies;
  }
}
