import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlashcardHomeComponent,
    PhonicSchemesListComponent
  ],
  exports: [FlashcardHomeComponent]
})
export class FlashcardModule { }
