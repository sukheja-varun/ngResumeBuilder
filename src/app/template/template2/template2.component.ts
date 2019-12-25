import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user-info/user-info.model';
import { UserInfoService } from 'src/app/user-info/user-info.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component implements OnInit {

  userData: User;
  Arr = Array;

  constructor(private _userInfoService: UserInfoService,
    private _utility: UtilityService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userData = this._userInfoService.getUserData();
  }

  downloadResume() {
    let htmlNode = document.getElementById('contentToConvert');
    this._utility.captureScreen(htmlNode);
  }

}
