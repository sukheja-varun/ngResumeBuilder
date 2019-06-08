import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  experienceDataForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.experienceDataForm = new FormGroup({
      'institute': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
      'shortDescription': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.experienceDataForm);
  }
}
