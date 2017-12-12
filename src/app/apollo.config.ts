import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// 1
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  exports: [
    // 2
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  // 3
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // 4
    const uri = 'https://serene-sands-14266.herokuapp.com/graphql';
    const http = httpLink.create({ uri });

    // 6
    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
