import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordHomeComponent } from './word-home/word-home.component';

const routes: Routes = [{ path: 'words', component: WordHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordRoutingModule {}
