import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { hobbies } from 'src/app/component/hobby/hobby.constant';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  extrasForm: FormGroup;
  @Output() formSubmit = new EventEmitter();
  hobbiesList = Object.keys(hobbies);

  constructor() { }

  ngOnInit() {
    this.extrasForm = new FormGroup({
      skills: new FormArray([]),
      languages: new FormArray([]),
      hobbies: new FormArray([])
    });

    this.onAddSkill();
    this.onAddLanguage();
    this.onAddHobby();
  }

  onAddSkill() {
    const skill = new FormGroup({
      name: new FormControl(null, Validators.required),
      score: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
      color: new FormControl(null)
    });
    (<FormArray>this.extrasForm.get('skills')).push(skill);
  }

  onAddLanguage() {
    const language = new FormGroup({
      name: new FormControl(null, Validators.required),
      score: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
      color: new FormControl(null)
    });
    (<FormArray>this.extrasForm.get('languages')).push(language);
  }

  onAddHobby() {
    const hobby = new FormControl(null, Validators.required);
    (<FormArray>this.extrasForm.get('hobbies')).push(hobby);
  }

  onDelete(index: number, identifier: string) {
    (<FormArray>this.extrasForm.get(identifier)).removeAt(index);
  }

  onSubmit() {
    this.formSubmit.emit(this.extrasForm.value);
  }

}
