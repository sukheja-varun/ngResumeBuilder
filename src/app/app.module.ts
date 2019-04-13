import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadialProgressBarComponent } from './progress-bar/radial-progress-bar/radial-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RadialProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
