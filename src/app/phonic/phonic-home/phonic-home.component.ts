import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import gql from "graphql-tag";

const PhonicSchemesList = gql`
  query PhonicsSchemeQuery {
    phonicSchemes {
      uuid
      name
      description
    }
  }
`;

@Component({
  selector: "app-phonic-home",
  templateUrl: "./phonic-home.component.html",
  styleUrls: ["./phonic-home.component.css"]
})
export class PhonicHomeComponent implements OnInit {
  loading: boolean;
  phonicSchemesList: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: PhonicSchemesList
      })
      .valueChanges.subscribe(({ data }) => {
        this.loading = data.loading;
        this.phonicSchemesList = data.phonicSchemes;
      });
  }
}
