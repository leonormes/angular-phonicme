import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlashcardHomeComponent
  ],
  exports: [FlashcardHomeComponent]
})
export class FlashcardModule { }
