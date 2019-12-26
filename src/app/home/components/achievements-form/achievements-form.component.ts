import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import get from 'lodash.get';

import { Achievement } from 'src/app/user-info/user-info.model';

@Component({
  selector: 'app-achievements-form',
  templateUrl: './achievements-form.component.html',
  styleUrls: ['./achievements-form.component.scss']
})
export class AchievementsFormComponent implements OnInit {
  achievementsDataForm: FormGroup;
  awards: Achievement[];
  certificates: Achievement[];
  @Output() formSubmit = new EventEmitter();

  constructor() {
    this.awards = JSON.parse(localStorage.getItem('ngResume.awards')) || [];
    this.certificates = JSON.parse(localStorage.getItem('ngResume.certificates')) || [];
  }

  ngOnInit() {
    this.achievementsDataForm = new FormGroup({
      'awards': new FormArray([]),
      'certificates': new FormArray([])
    });
    this.awards.length > 0 ? this.setCacheAwards() : this.onAddMore('awards');
    this.certificates.length > 0 ? this.setCacheCertificates() : this.onAddMore('certificates');
  }

  onAddMore(key: string, achievementData?: Achievement, ) {
    const achievement = new FormGroup({
      'title': new FormControl(
        get(achievementData, 'title', null), Validators.required
      ),
      'issueDate': new FormControl(
        get(achievementData, 'issueDate', null), [Validators.required]
      ),
      'issuedBy': new FormControl(
        get(achievementData, 'issuedBy', null), [Validators.required]
      ),
      'shortDescription': new FormControl(
        get(achievementData, 'shortDescription', null)
      )
    });
    (<FormArray>this.achievementsDataForm.get(key)).push(achievement);
  }

  setCacheAwards() {
    this.awards.forEach((award) => {
      this.onAddMore('awards', award);
    });
  }

  setCacheCertificates() {
    this.certificates.forEach((certificate) => {
      this.onAddMore('certificates', certificate);
    });
  }

  onDelete(index: number, key: string) {
    (<FormArray>this.achievementsDataForm.get(key)).removeAt(index);
  }

  onSubmit() {
    this.formSubmit.emit(this.achievementsDataForm.value);
    localStorage.setItem(
      'ngResume.awards',
      JSON.stringify(this.achievementsDataForm.value.awards)
    );
    localStorage.setItem(
      'ngResume.certificates',
      JSON.stringify(this.achievementsDataForm.value.certificates)
    );
  }

  onSkip(){
    this.formSubmit.emit({awards:null,certificates:null});
  }

}
