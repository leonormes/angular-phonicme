import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhonicSchemeItemComponent } from "./phonic-scheme-item/phonic-scheme-item.component";
import { PhonicSchemesListComponent } from "./phonic-schemes-list/phonic-schemes-list.component";
import { PhonicHomeComponent } from "./phonic-home/phonic-home.component";
import { PhonicRoutingModule } from "app/phonic/phonic.routing";

@NgModule({
  imports: [CommonModule, PhonicRoutingModule],
  declarations: [
    PhonicSchemeItemComponent,
    PhonicSchemesListComponent,
    PhonicHomeComponent
  ]
})
export class PhonicModule {}
