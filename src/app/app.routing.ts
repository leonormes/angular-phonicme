import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhonicModule } from './phonic/phonic.module';
import { FlashcardModule } from './flashcard/flashcard.module';
import { HomeModule } from './home/home.module';
import { WordModule } from './word/word.module';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'words', loadChildren: 'app/word/word.module#WordModule' },
  { path: 'phonics', loadChildren: 'app/phonic/phonic.module#PhonicModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FlashcardModule,
    PhonicModule,
    WordModule
  ],
  exports: [RouterModule, FlashcardModule, WordModule, PhonicModule, HomeModule]
})
export class AppRoutingModule {}
