import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Template1Component } from "./template/template1/template1.component";
import { Template2Component } from "./template/template2/template2.component";
import { Template3Component } from "./template/template3/template3.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  { path: "template1", component: Template1Component },
  { path: "template2", component: Template2Component },
  { path: "template3", component: Template3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
