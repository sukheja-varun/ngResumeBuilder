import { Component, OnInit, Input} from '@angular/core';

import { hobbies } from './hobby.constant';
@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  readonly hobbyImgList = hobbies;
  @Input() hobby: string;

  constructor() { }

  ngOnInit() {
  }

}
