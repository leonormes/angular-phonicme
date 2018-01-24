import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/auth.guard';

import { PhonicHomeComponent } from './phonic-home/phonic-home.component';

const routes: Routes = [
  { path: 'phonics', component: PhonicHomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonicRoutingModule {}
