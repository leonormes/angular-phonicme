import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { HomeComponent } from './home/home.component';
import { FlashcardHomeComponent } from './flashcard/flashcard-home/flashcard-home.component';
import { FlashcardModule } from './flashcard/flashcard.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newword', component: NewWordFormComponent },
  { path: 'flashcards', component: FlashcardHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlashcardModule],
  exports: [RouterModule, FlashcardModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  NewWordFormComponent,
  FlashcardHomeComponent,
  HomeComponent
];
