import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  experienceDataForm: FormGroup;
  @Output() formSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.experienceDataForm = new FormGroup({
      'experiences': new FormArray([])
    });
    this.onAddMore();
  }

  onAddMore() {
    const experience = new FormGroup({
      'institute': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
      'shortDescription': new FormControl(null, Validators.required)
    });
    (<FormArray>this.experienceDataForm.get('experiences')).push(experience);
  }

  onSubmit() {
    this.formSubmit.emit(this.experienceDataForm.value);
  }
}
