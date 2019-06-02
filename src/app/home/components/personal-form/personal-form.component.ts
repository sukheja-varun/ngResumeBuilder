import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  personalDataForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.personalDataForm = new FormGroup({
      'fullName': new FormControl(null),
      'title': new FormControl(null),
      'address': new FormControl(null),
      'mobile': new FormControl(null),
      'email': new FormControl(null),
      'website': new FormControl(null),
      'linkedIn': new FormControl(null),
      'fb': new FormControl(null),
      'twitter': new FormControl(null),
    });
  }
}
