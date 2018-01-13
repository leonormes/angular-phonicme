import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhonicModule } from "./phonic/phonic.module";
import { FlashcardModule } from "./flashcard/flashcard.module";
import { HomeModule } from "./home/home.module";
import { WordModule } from "./word/word.module";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "app/home/home.module#HomeModule" },
  { path: "words", loadChildren: "app/word/word.module#WordModule" },
  { path: "phonics", loadChildren: "app/phonic/phonic.module#PhonicModule" },
  {
    path: "flashcards",
    loadChildren: "app/flashcard/flashcard.module#FlashcardModule"
  }
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

export const routingComponents = [];
