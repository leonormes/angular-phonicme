import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-phonic',
  templateUrl: './phonic.component.html',
  styleUrls: ['./phonic.component.css']
})
export class PhonicComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'row';
    votes: number;
    word: string;

  constructor() {
    this.word = 'Cat';
    this.votes = 10;
  }

  ngOnInit() {
  }

}
