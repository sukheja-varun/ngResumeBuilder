import { Component, OnInit } from "@angular/core";

import { User } from "src/app/user-info/user-info.model";
import { UserInfoService } from "src/app/user-info/user-info.service";

@Component({
  selector: "app-template3",
  templateUrl: "./template3.component.html",
  styleUrls: ["./template3.component.scss"]
})
export class Template3Component implements OnInit {
  userData: User;
  stylesObj: object = { width: "20px", height: "40px", marginRight: "5px" };

  constructor(private _userInfoService: UserInfoService) {}

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
}
