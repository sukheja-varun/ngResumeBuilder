import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  personalDataForm: FormGroup;
  @Output() formSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.personalDataForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mobile': new FormControl(null),
      'website': new FormControl(null),
      'linkedIn': new FormControl(null),
      'fb': new FormControl(null),
      'twitter': new FormControl(null),
    });
  }

  onSubmit() {
    this.formSubmit.emit(this.personalDataForm.value);
  }
}
