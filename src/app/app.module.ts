import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule, routingComponents } from "./app.routing";

import { AppComponent } from "./app.component";
import { WordModule } from "./word/word.module";
import { PhonicComponent } from "./phonic/phonic.component";
import { HomeComponent } from "./home/home.component";
import { NewWordFormComponent } from "./new-word-form/new-word-form.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    NewWordFormComponent,
    PhonicComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
