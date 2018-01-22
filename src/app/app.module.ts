import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule, routingComponents } from "./app.routing";
import { AuthGuard } from "./authentication/auth.guard";
import { AuthService } from "./authentication/auth.service";
import { CallbackComponent } from "./authentication/auth.callback";

import { AppComponent } from "./app.component";
import { WordModule } from "./word/word.module";
import { PhonicModule } from "./phonic/phonic.module";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [AppComponent, CallbackComponent, NavigationComponent],
  imports: [
    BrowserModule,
    PhonicModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
