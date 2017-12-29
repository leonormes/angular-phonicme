import { PhonicComponent } from './phonic/phonic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { HomeComponent } from './home/home.component';
import { FlashcardHomeComponent } from './flashcard/flashcard-home/flashcard-home.component';
import { FlashcardModule } from './flashcard/flashcard.module';
import { HomeModule } from './home/home.module';
import { WordHomeComponent } from './word/word-home/word-home.component';
import { WordModule } from './word/word.module';
import { WordMetaDataComponent } from 'app/word/word-meta-data/word-meta-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'words', loadChildren: 'app/word/word.module#WordModule' },
  { path: 'newword', component: NewWordFormComponent },
  { path: 'phonics', component: PhonicComponent },
  {
    path: 'flashcards',
    loadChildren: 'app/flashcard/flashcard.module#FlashcardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlashcardModule, WordModule],
  exports: [RouterModule, FlashcardModule, WordModule, HomeModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  NewWordFormComponent,
  FlashcardHomeComponent,
  HomeComponent
];
