import { Component, OnInit, Input } from '@angular/core';

import { Experience } from 'src/app/user-info/user-info.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() experiences: Experience[];

  constructor() { }

  ngOnInit() {
  }

}
