import { Component, OnInit, Input } from '@angular/core';
import { PersonalInfo } from 'src/app/user-info/user-info.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() personalInfo: PersonalInfo;

  constructor() { }

  ngOnInit() {
  }

}
