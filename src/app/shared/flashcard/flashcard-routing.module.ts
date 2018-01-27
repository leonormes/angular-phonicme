import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component';

const routes: Routes = [
  {
    path: 'flashcards',
    component: FlashcardHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardRoutingModule {}
