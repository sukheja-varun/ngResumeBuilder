import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import htmlToImage from 'html-to-image';


import { User } from 'src/app/user-info/user-info.model';
import { UserInfoService } from 'src/app/user-info/user-info.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Template1Component implements OnInit {

  userData: User;

  constructor(
    private _userInfoService: UserInfoService,
    private _utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userData = this._userInfoService.getUserData();
    this.userData.experiences =
      this.userData.experiences
        .concat(this.userData.educations)
        .sort(
          (a, b) => +new Date(b.startDate) - +new Date(a.startDate)
        );
  }

  public captureScreen() {
    let node = document.getElementById('contentToConvert');
    this._utilityService.captureScreen(node);
  }

}
