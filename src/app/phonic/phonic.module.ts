import { UserService } from './../sevices/user.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhonicSchemeItemComponent } from "./phonic-scheme-item/phonic-scheme-item.component";
import { PhonicSchemesListComponent } from "./phonic-schemes-list/phonic-schemes-list.component";
import { PhonicHomeComponent } from "./phonic-home/phonic-home.component";
import { PhonicRoutingModule } from "app/phonic/phonic.routing";
import { PhonicCardSetsComponent } from './phonic-card-sets/phonic-card-sets.component';
import { PhonicCardSetItemComponent } from './phonic-card-set-item/phonic-card-set-item.component';

@NgModule({
  imports: [CommonModule, PhonicRoutingModule],
  declarations: [
    PhonicSchemeItemComponent,
    PhonicSchemesListComponent,
    PhonicHomeComponent,
    PhonicCardSetsComponent,
    PhonicCardSetItemComponent
  ],
  providers: [
  UserService
  ]
})
export class PhonicModule {}
