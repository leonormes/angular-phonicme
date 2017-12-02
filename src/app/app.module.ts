import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app.routing';

import { AppComponent } from './app.component';
import { PhonicComponent } from './phonic/phonic.component';
import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { PhonicsListComponent } from './phonics-list/phonics-list.component';
import { PhonicRowComponent } from './phonic-row/phonic-row.component';
import { PhonicWordComponent } from './phonic-word/phonic-word.component';
import { PhonicAudioComponent } from './phonic-audio/phonic-audio.component';
import { PhonicMetaComponent } from './phonic-meta/phonic-meta.component';
import { HomeComponent } from './home/home.component';
import { FlashcardModule } from './flashcard/flashcard.module';

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
    AppComponent,
    routingComponents,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
