import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import htmlToImage from 'html-to-image';


import { User } from 'src/app/user-info/user-info.model';
import { UserInfoService } from 'src/app/user-info/user-info.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Template1Component implements OnInit {

  userData: User;

  constructor(private _userInfoService: UserInfoService) { }

  ngOnInit() {
    this.getUserDetails();
    console.log(this.userData);

  }

  getUserDetails() {
    this.userData = this._userInfoService.getUserData();
  }

  public captureScreen() {
    var node = document.getElementById('contentToConvert');
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'resume.png';
        link.href = dataUrl;
        link.click();
      });

  }

}
