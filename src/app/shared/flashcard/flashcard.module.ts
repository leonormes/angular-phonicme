import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component';
import { FlashcardRoutingModule } from './flashcard-routing.module';
import { FlashcardComponent } from './flashcard/flashcard.component';

@NgModule({
  imports: [CommonModule, FlashcardRoutingModule],
  declarations: [FlashcardHomeComponent, FlashcardComponent],
  exports: [FlashcardHomeComponent]
})
export class FlashcardModule {}
