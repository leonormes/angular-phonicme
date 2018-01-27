import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhonicRoutingModule } from './phonic.routing';

import { UserService } from './../sevices/user.service';
import { PhonicCardSetItemComponent } from './phonic-card-set-item/phonic-card-set-item.component';
import { PhonicCardSetsComponent } from './phonic-card-sets/phonic-card-sets.component';
import { PhonicHomeComponent } from './phonic-home/phonic-home.component';
import { PhonicSchemeItemComponent } from './phonic-scheme-item/phonic-scheme-item.component';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';

@NgModule({
  imports: [CommonModule, PhonicRoutingModule],
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
