import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Template1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
