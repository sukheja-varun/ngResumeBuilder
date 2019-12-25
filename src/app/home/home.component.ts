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
    educations: [],
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
    this.user.personalInfo = personalData;
    this.activeFormIndex = 2;
  }

  onExperienceData(data) {
    this.user.experiences = data.experiences;
    this.user.educations = data.educations;
    this.activeFormIndex = 3;
  }
  onSkillsData(data) {
    this.user.skills = data.skills;
    this.user.languages = data.languages;
    this.user.hobbies = data.hobbies;
    this.activeFormIndex = 4;
  }

  onAchievementsData(data) {
    this.user.awards = data.awards;
    this.user.certificates = data.certificates;
    this.userInfoService.setUserData(this.user);
    this.router.navigate(['/templates']);
  }
}
