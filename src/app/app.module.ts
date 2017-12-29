import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app.routing';

import { AppComponent } from './app.component';
import { WordHomeComponent } from './word/word-home/word-home.component';
import { PhonicComponent } from './phonic/phonic.component';
import { PhonicsListComponent } from './phonics-list/phonics-list.component';
import { HomeComponent } from './home/home.component';
import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NewWordFormComponent,
    PhonicComponent,
    PhonicsListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
