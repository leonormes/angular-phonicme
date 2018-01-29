import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { UserService } from './../../sevices/user.service';

const cardSetsQuery = gql`
  query cardSetsQuery($schemeChoice: ID) {
    cardSets(phonicSchemeUuid: $schemeChoice) {
      name
      uuid
      order
      phonicScheme {
        name
      }
      flashcards {
        order
        uuid
        grapheme {
          grapheme
        }
      }
    }
  }
`;

@Component({
  selector: 'app-phonic-card-sets',
  templateUrl: './phonic-card-sets.component.html',
  styleUrls: ['./phonic-card-sets.component.css']
})
export class PhonicCardSetsComponent implements OnInit {
  loading: boolean;
  cardSetList: any;
  schemeId: any = this.activeRoute.snapshot.params['setId'];
  constructor(
    private activeRoute: ActivatedRoute,
    private apollo: Apollo,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: cardSetsQuery,
        variables: {
          schemeChoice: this.schemeId
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.loading = data.loading;
        this.cardSetList = data.cardSets;
      });
  }
}
