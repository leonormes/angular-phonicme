import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallbackComponent } from './authentication/auth.callback';
import { AuthGuard } from './authentication/auth.guard';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhonicModule } from './phonic/phonic.module';
import { WordModule } from './word/word.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'words',
    loadChildren: 'app/word/word.module#WordModule'
  },
  {
    path: 'phonics',
    loadChildren: 'app/phonic/phonic.module#PhonicModule'
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PhonicModule, WordModule],
  providers: [AuthGuard],
  exports: [RouterModule, WordModule, PhonicModule, HomeModule]
})
export class AppRoutingModule {}

export const routingComponents = [];
