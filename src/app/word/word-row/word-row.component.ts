import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Word } from '../word.model';

@Component({
  selector: 'app-word-row',
  templateUrl: './word-row.component.html',
  styleUrls: ['./word-row.component.css']
})
export class WordRowComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'item';
  @Input() word: Word;
  constructor() {}

  ngOnInit() {}
}
