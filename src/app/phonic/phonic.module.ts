import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlashcardModule } from '../shared/flashcard/flashcard.module';
import { UserService } from './../sevices/user.service';
import { PhonicCardSetItemComponent } from './phonic-card-set-item/phonic-card-set-item.component';
import { PhonicCardSetsComponent } from './phonic-card-sets/phonic-card-sets.component';
import { PhonicHomeComponent } from './phonic-home/phonic-home.component';
import { PhonicSchemeItemComponent } from './phonic-scheme-item/phonic-scheme-item.component';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';
import { PhonicRoutingModule } from './phonic.routing';

@NgModule({
  imports: [CommonModule, FlashcardModule, PhonicRoutingModule],
  declarations: [
    PhonicSchemeItemComponent,
    PhonicSchemesListComponent,
    PhonicHomeComponent,
    PhonicCardSetsComponent,
    PhonicCardSetItemComponent
  ],
  providers: [UserService]
})
export class PhonicModule {}
