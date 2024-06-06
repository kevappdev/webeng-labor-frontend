import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import {FormsModule} from "@angular/forms";
import { AddNewComponent } from './components/add-new/add-new.component';
import {SearchDropdown} from './components/drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AddNewComponent,
    SearchDropdown
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
