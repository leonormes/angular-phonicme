import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhonicComponent } from './phonic/phonic.component';
import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { PhonicListComponent } from './phonic-list/phonic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonicComponent,
    NewWordFormComponent,
    PhonicListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
