import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadialProgressBarComponent } from './progress-bar/radial-progress-bar/radial-progress-bar.component';
import { HobbyComponent } from './component/hobby/hobby.component';
import { TimelineComponent } from './component/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialProgressBarComponent,
    HobbyComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
