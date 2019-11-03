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

  constructor(private _userInfoService: UserInfoService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userData = this._userInfoService.getUserData();
  }
}
