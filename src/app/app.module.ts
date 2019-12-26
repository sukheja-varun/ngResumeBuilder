import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadialProgressBarComponent } from './component/progress-bar/radial-progress-bar/radial-progress-bar.component';
import { LinearProgressBarComponent } from './component/progress-bar/linear-progress-bar/linear-progress-bar.component';
import { HobbyComponent } from './component/hobby/hobby.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { FooterComponent } from './component/footer/footer.component';
import { Template1Component } from './template/template1/template1.component';
import { Template2Component } from './template/template2/template2.component';
import { Template3Component } from './template/template3/template3.component';
import { TemplateSelectorComponent } from './home/components/template-selector/template-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialProgressBarComponent,
    LinearProgressBarComponent,
    HobbyComponent,
    TimelineComponent,
    FooterComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    TemplateSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
