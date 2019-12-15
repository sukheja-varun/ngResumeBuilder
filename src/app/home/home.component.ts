import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Experience, PersonalInfo, User } from '../user-info/user-info.model';
import { UserInfoService } from '../user-info/user-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeFormIndex = 1;
  user: User = {
    awards: [],
    certificates: [],
    education: [],
    experiences: [],
    hobbies: [],
    languages: [],
    skills: [],
    personalInfo: {
      name: '',
      title: '',
      address: '',
      email: '',
      mobile: ''
    },
  };

  constructor(
    private userInfoService: UserInfoService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onPersonalData(personalData: PersonalInfo) {
    // this.userInfoService.setPersonalInfo(personalData);
    this.user.personalInfo = personalData;
    this.activeFormIndex = 2;
  }

  onExperienceData(experiences: Experience[]) {
    // this.userInfoService.setExperiences(experiences);
    this.user.experiences = experiences;
    this.activeFormIndex = 3;
  }
  onSkillsData(data) {
    // this.userInfoService.setSkills(data.skills);
    // this.userInfoService.setLanguages(data.languages);
    // this.userInfoService.setHobbies(data.hobbies);
    this.user.skills = data.skills;
    this.user.languages = data.languages;
    this.user.hobbies = data.hobbies;
    this.userInfoService.setUserData(this.user);
    this.activeFormIndex = 4;
  }
}
