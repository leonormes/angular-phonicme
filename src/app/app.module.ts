import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule, routingComponents } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloModule, Apollo } from "apollo-angular";

import { AppComponent } from "./app.component";
import { WordModule } from "./word/word.module";
import { PhonicModule } from "./phonic/phonic.module";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    PhonicModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = "https://serene-sands-14266.herokuapp.com/graphql";
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
