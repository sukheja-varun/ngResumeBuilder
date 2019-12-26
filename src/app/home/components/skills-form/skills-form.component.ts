import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import get from 'lodash.get';

import { hobbies } from 'src/app/component/hobby/hobby.constant';
import { Hobby, Skill, Language } from 'src/app/user-info/user-info.model';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  extrasForm: FormGroup;
  skills: Skill[];
  languages: Language[];
  hobbies: Hobby[];
  @Output() formSubmit = new EventEmitter();
  hobbiesList = Object.keys(hobbies);

  constructor() {
    this.skills = JSON.parse(localStorage.getItem('ngResume.skills')) || [];
    this.languages = JSON.parse(localStorage.getItem('ngResume.languages')) || [];
    this.hobbies = JSON.parse(localStorage.getItem('ngResume.hobbies')) || [];
  }

  ngOnInit() {
    this.extrasForm = new FormGroup({
      skills: new FormArray([]),
      languages: new FormArray([]),
      hobbies: new FormArray([])
    });

    this.skills.length > 0 ? this.setCacheSkills() : this.onAddSkill();
    this.languages.length > 0 ? this.setCacheLanguages() : this.onAddLanguage();
    this.hobbies.length > 0 ? this.setCacheHobbies() : null;
  }

  setCacheSkills() {
    this.skills.forEach(skill => this.onAddSkill(skill));
  }
  setCacheLanguages() {
    this.languages.forEach(language => this.onAddLanguage(language));
  }
  setCacheHobbies() {
    this.hobbies.forEach(hobby => this.onAddHobby(hobby));
  }

  onAddSkill(skillData?: Skill) {
    const skill = new FormGroup({
      name: new FormControl(
        get(skillData, 'name', null),
        Validators.required
      ),
      score: new FormControl(
        get(skillData, 'score', null),
        [Validators.required, Validators.min(1), Validators.max(100)]
      ),
      color: new FormControl(get(skillData, 'color', null))
    });
    (<FormArray>this.extrasForm.get('skills')).push(skill);
  }

  onAddLanguage(languageData?: Language) {
    const language = new FormGroup({
      name: new FormControl(
        get(languageData, 'name', null),
        Validators.required
      ),
      score: new FormControl(
        get(languageData, 'score', null),
        [Validators.required, Validators.min(1), Validators.max(10)]
      ),
      color: new FormControl(get(languageData, 'color', null))
    });
    (<FormArray>this.extrasForm.get('languages')).push(language);
  }

  onAddHobby(hobbyData?: Hobby) {
    const hobby = new FormControl(hobbyData || null, Validators.required);
    (<FormArray>this.extrasForm.get('hobbies')).push(hobby);
  }

  onDelete(index: number, identifier: string) {
    (<FormArray>this.extrasForm.get(identifier)).removeAt(index);
  }

  onSubmit() {
    const data = this.extrasForm.value;
    this.formSubmit.emit(data);
    localStorage.setItem('ngResume.skills', JSON.stringify(data.skills));
    localStorage.setItem('ngResume.languages', JSON.stringify(data.languages));
    localStorage.setItem('ngResume.hobbies', JSON.stringify(data.hobbies));

  }

}
