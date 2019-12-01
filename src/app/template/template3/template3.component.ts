import { Component, OnInit } from "@angular/core";

import { User } from "src/app/user-info/user-info.model";
import { UserInfoService } from "src/app/user-info/user-info.service";
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: "app-template3",
  templateUrl: "./template3.component.html",
  styleUrls: ["./template3.component.scss"]
})
export class Template3Component implements OnInit {
  userData: User;
  stylesLinearProgressBar: object = {
    width: "20px",
    height: "40px",
    marginRight: "10px"
  };
  colorList = ["#FF653F", "#FFC814", "#28A5FF", "#8BC117", "#81CFE2"];

  constructor(
    private _userInfoService: UserInfoService,
    private _utility: UtilityService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userData = this._userInfoService.getUserData();
    this.userData.education.map(edu => {
      edu.startDate = edu.startDate.split("-")[0];
      edu.endDate = edu.endDate.split("-")[0];
      return edu;
    });
    this.userData.experiences.map(experience => {
      experience.startDate = experience.startDate.split("-")[0];
      experience.endDate = experience.endDate.split("-")[0];
      return experience;
    });
  }

  downloadResume() {
    let htmlNode = document.getElementById('contentToConvert');
    this._utility.captureScreen(htmlNode);
  }
}
