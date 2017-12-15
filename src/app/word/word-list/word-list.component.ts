import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Word } from '../word.model';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  @Input() WordList: Word[];

  constructor() {}

  ngOnInit() {}
}
