import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PhonicSchemesListComponent],
  exports: [PhonicSchemesListComponent]
})
export class FlashcardModule {}
