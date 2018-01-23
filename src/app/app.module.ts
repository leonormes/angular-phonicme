import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CallbackComponent } from './authentication/auth.callback';
import { AuthGuard } from './authentication/auth.guard';
import { AuthService } from './authentication/auth.service';
import { NavigationComponent } from './navigation/navigation.component';
import { PhonicModule } from './phonic/phonic.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, PageNotFoundComponent],
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
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = 'https://serene-sands-14266.herokuapp.com/graphql';
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
