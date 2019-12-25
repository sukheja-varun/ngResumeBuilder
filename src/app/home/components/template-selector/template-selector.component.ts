import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {

  items=new Array(3);

  constructor() { }

  ngOnInit() {
  }

}
