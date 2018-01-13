import { NgModule } from "@angular/core";
import { PhonicHomeComponent } from "./phonic-home/phonic-home.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "phonics", component: PhonicHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonicRoutingModule {}
