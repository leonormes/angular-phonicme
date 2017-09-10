import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhonicComponent } from './phonic/phonic.component';
import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { PhonicsListComponent } from './phonics-list/phonics-list.component';
import { PhonicRowComponent } from './phonic-row/phonic-row.component';
import { PhonicWordComponent } from './phonic-word/phonic-word.component';
import { PhonicAudioComponent } from './phonic-audio/phonic-audio.component';
import { PhonicMetaComponent } from './phonic-meta/phonic-meta.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonicComponent,
    NewWordFormComponent,
    PhonicsListComponent,
    PhonicRowComponent,
    PhonicWordComponent,
    PhonicAudioComponent,
    PhonicMetaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
