import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    PersonalFormComponent,
    ExperienceFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
