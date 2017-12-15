import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';

const routes: Routes = [
  { path: 'flashcards', component: FlashcardHomeComponent },
  { path: 'schemes', component: PhonicSchemesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardRoutingModule {}
