import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Template1Component } from './template/template1/template1.component';

const routes: Routes = [
  { path: 'template1', component: Template1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
