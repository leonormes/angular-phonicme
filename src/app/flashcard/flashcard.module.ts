import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';
import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PhonicSchemesListComponent, FlashcardHomeComponent],
  exports: [PhonicSchemesListComponent, FlashcardHomeComponent]
})
export class FlashcardModule {}
