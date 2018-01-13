import { NewWordFormComponent } from "./new-word-form/new-word-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WordRoutingModule } from "./word-routing";
import { WordHomeComponent } from "./word-home/word-home.component";
import { WordListComponent } from "./word-list/word-list.component";
import { WordComponent } from "./word/word.component";
import { WordRowComponent } from "./word-row/word-row.component";
import { WordMetaDataComponent } from "./word-meta-data/word-meta-data.component";

@NgModule({
  imports: [CommonModule, WordRoutingModule],
  declarations: [
    WordHomeComponent,
    WordListComponent,
    WordComponent,
    WordRowComponent,
    WordMetaDataComponent
  ],
  exports: []
})
export class WordModule {}
