import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { sortBy } from 'lodash';

import { UserService } from '../../../sevices/user.service';

const flashcardQuery = gql`
  query flashcardQuery($setChoice: ID) {
    cardSets(uuid: $setChoice) {
      name
      uuid
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
  selector: 'app-flashcard-home',
  templateUrl: './flashcard-home.component.html',
  styleUrls: ['./flashcard-home.component.css']
})
export class FlashcardHomeComponent implements OnInit {
  loading: boolean;
  cardSet: any = this.activeRoute.snapshot.params['cardId'];
  flashcards: any;
  sortedCards: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private apollo: Apollo,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: flashcardQuery,
        variables: {
          setChoice: this.cardSet
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.loading = data.loading;
        this.flashcards = data.cardSets[0].flashcards;
        this.sortedCards = sortBy(this.flashcards, ['order']);
      });
  }
}
