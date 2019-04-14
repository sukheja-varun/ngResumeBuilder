import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadialProgressBarComponent } from './progress-bar/radial-progress-bar/radial-progress-bar.component';
import { HobbyComponent } from './component/hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialProgressBarComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
