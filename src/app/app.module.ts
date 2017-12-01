import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PhonicComponent } from './phonic/phonic.component';
import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { PhonicsListComponent } from './phonics-list/phonics-list.component';
import { PhonicRowComponent } from './phonic-row/phonic-row.component';
import { PhonicWordComponent } from './phonic-word/phonic-word.component';
import { PhonicAudioComponent } from './phonic-audio/phonic-audio.component';
import { PhonicMetaComponent } from './phonic-meta/phonic-meta.component';
import { HomeComponent } from './home/home.component';
import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newword', component: NewWordFormComponent },
  { path: 'flashcard', component: FlashcardHomeComponent }
]
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
    HomeComponent,
    FlashcardHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
