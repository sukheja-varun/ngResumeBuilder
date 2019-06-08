import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  extrasForm: FormGroup;

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
      name: new FormControl('', Validators.required),
      score: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
      color: new FormControl('')
    });
    (<FormArray>this.extrasForm.get('skills')).push(skill);
  }

  onAddLanguage() {
    const language = new FormGroup({
      name: new FormControl('', Validators.required),
      score: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
      color: new FormControl('')
    });
    (<FormArray>this.extrasForm.get('languages')).push(language);
  }

  onAddHobby() {
    const hobby = new FormControl('', Validators.required);
    (<FormArray>this.extrasForm.get('hobbies')).push(hobby);
  }

  onSubmit() {
    console.log(this.extrasForm);
  }

}
