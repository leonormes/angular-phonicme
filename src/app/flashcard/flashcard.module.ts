import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';
import { FlashcardHomeComponent } from './flashcard-home/flashcard-home.component';
import { FlashcardRoutingModule } from './flashcard-routing.module';

@NgModule({
  imports: [CommonModule, FlashcardRoutingModule],
  declarations: [PhonicSchemesListComponent, FlashcardHomeComponent],
  exports: [PhonicSchemesListComponent, FlashcardHomeComponent]
})
export class FlashcardModule {}
