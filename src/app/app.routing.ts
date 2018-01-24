import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallbackComponent } from './authentication/auth.callback';
import { AuthGuard } from './authentication/auth.guard';
import { FlashcardModule } from './flashcard/flashcard.module';
import { HomeModule } from './home/home.module';
import { PhonicModule } from './phonic/phonic.module';
import { WordModule } from './word/word.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
    canActivate: [AuthGuard]
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
    path: 'flashcards',
    loadChildren: 'app/flashcard/flashcard.module#FlashcardModule'
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FlashcardModule,
    PhonicModule,
    WordModule
  ],
  providers: [AuthGuard],
  exports: [RouterModule, FlashcardModule, WordModule, PhonicModule, HomeModule]
})
export class AppRoutingModule {}

export const routingComponents = [];
