import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import get from 'lodash.get';

import { PersonalInfo } from 'src/app/user-info/user-info.model';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  personalDataForm: FormGroup;
  personalInfo: PersonalInfo;
  @Output() formSubmit = new EventEmitter();

  constructor() {
    this.personalInfo = JSON.parse(localStorage.getItem('ngResume.personalInfo')) || {};
  }

  ngOnInit() {
    this.personalDataForm = new FormGroup({
      'name': new FormControl(get(this.personalInfo, 'name', null), Validators.required),
      'title': new FormControl(get(this.personalInfo, 'title', null), Validators.required),
      'address': new FormControl(get(this.personalInfo, 'address', null), Validators.required),
      'email': new FormControl(get(this.personalInfo, 'email', null), [Validators.required, Validators.email]),
      'mobile': new FormControl(get(this.personalInfo, 'mobile', Validators.required)),
      'website': new FormControl(get(this.personalInfo, 'website', null)),
      'linkedIn': new FormControl(get(this.personalInfo, 'linkedIn', null)),
      'fb': new FormControl(get(this.personalInfo, 'fb', null)),
      'twitter': new FormControl(get(this.personalInfo, 'twitter', null)),
    });
  }

  onSubmit() {
    this.formSubmit.emit(this.personalDataForm.value);
    localStorage.setItem('ngResume.personalInfo', JSON.stringify(this.personalDataForm.value));
  }
}
