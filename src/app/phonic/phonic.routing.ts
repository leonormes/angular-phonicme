import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';

import { AuthGuard } from '../authentication/auth.guard';
import { PhonicCardSetsComponent } from './phonic-card-sets/phonic-card-sets.component';
import { PhonicHomeComponent } from './phonic-home/phonic-home.component';

const routes: Routes = [
  { path: 'phonics', component: PhonicHomeComponent, canActivate: [AuthGuard] },
  {
    path: 'schemeChoice',
    component: PhonicSchemesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cardsets/:id',
    component: PhonicCardSetsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonicRoutingModule {}
