import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import get from 'lodash.get';

import { Experience } from 'src/app/user-info/user-info.model';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  experienceDataForm: FormGroup;
  experiences: Experience[];
  educations: Experience[];
  @Output() formSubmit = new EventEmitter();

  constructor() {
    this.experiences = JSON.parse(localStorage.getItem('ngResume.experiences')) || [];
    this.educations = JSON.parse(localStorage.getItem('ngResume.educations')) || [];
  }

  ngOnInit() {
    this.experienceDataForm = new FormGroup({
      'experiences': new FormArray([]),
      'educations': new FormArray([])
    });
    this.experiences.length > 0 ? this.setCacheExperiences() : this.onAddMore('experiences');
    this.educations.length > 0 ? this.setCacheEducations() : this.onAddMore('educations');
  }

  onAddMore(key: string, experienceData?: Experience, ) {
    const experience = new FormGroup({
      'institute': new FormControl(
        get(experienceData, 'institute', null), Validators.required
      ),
      'startDate': new FormControl(
        get(experienceData, 'startDate', null), [Validators.required]
      ),
      'endDate': new FormControl(
        get(experienceData, 'endDate', null), [Validators.required]
      ),
      'shortDescription': new FormControl(
        get(experienceData, 'shortDescription', null), Validators.required
      )
    });
    (<FormArray>this.experienceDataForm.get(key)).push(experience);
  }

  setCacheExperiences() {
    this.experiences.forEach((experience) => {
      this.onAddMore('experiences', experience);
    });
  }

  setCacheEducations() {
    this.educations.forEach((education) => {
      this.onAddMore('educations', education);
    });
  }

  onDelete(index: number, key: string) {
    (<FormArray>this.experienceDataForm.get(key)).removeAt(index);
  }

  onSubmit() {
    this.formSubmit.emit(this.experienceDataForm.value);
    localStorage.setItem(
      'ngResume.experiences',
      JSON.stringify(this.experienceDataForm.value.experiences)
    );
    localStorage.setItem(
      'ngResume.educations',
      JSON.stringify(this.experienceDataForm.value.educations)
    );

  }
}
