import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonicComponent } from './phonic/phonic.component';
import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { PhonicsListComponent } from './phonics-list/phonics-list.component';
import { PhonicRowComponent } from './phonic-row/phonic-row.component';
import { PhonicWordComponent } from './phonic-word/phonic-word.component';
import { PhonicAudioComponent } from './phonic-audio/phonic-audio.component';
import { PhonicMetaComponent } from './phonic-meta/phonic-meta.component';
import { HomeComponent } from './home/home.component';
import { FlashcardHomeComponent } from './flashcard/flashcard-home/flashcard-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flashcards', component: FlashcardHomeComponent },
  { path: 'newword', component: NewWordFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  PhonicComponent,
  NewWordFormComponent,
  PhonicsListComponent,
  PhonicRowComponent,
  PhonicWordComponent,
  PhonicAudioComponent,
  PhonicMetaComponent,
  FlashcardHomeComponent,
  HomeComponent
];
