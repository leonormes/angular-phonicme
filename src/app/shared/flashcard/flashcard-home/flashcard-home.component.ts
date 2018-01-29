import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-home',
  templateUrl: './flashcard-home.component.html',
  styleUrls: ['./flashcard-home.component.css']
})
export class FlashcardHomeComponent implements OnInit {
  @Input() cardSet: Array<{}>;
  constructor() {}

  ngOnInit() {}
}
