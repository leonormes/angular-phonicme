import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../authentication/auth.guard';
import { PhonicCardSetsComponent } from './phonic-card-sets/phonic-card-sets.component';
import { PhonicCardComponent } from './phonic-card/phonic-card.component';
import { PhonicHomeComponent } from './phonic-home/phonic-home.component';
import { PhonicSchemesListComponent } from './phonic-schemes-list/phonic-schemes-list.component';

const routes: Routes = [
  { path: 'phonics', component: PhonicHomeComponent, canActivate: [AuthGuard] },
  {
    path: 'schemeChoice',
    component: PhonicSchemesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cardSets/:setId',
    component: PhonicCardSetsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cardSets/:setId/phonicCard/:cardId',
    component: PhonicCardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonicRoutingModule {}
