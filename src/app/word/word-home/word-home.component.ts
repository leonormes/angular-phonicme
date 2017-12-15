import { Component, OnInit, EventEmitter } from '@angular/core';
import { Word } from '../word.model';

@Component({
  selector: 'app-word-home',
  templateUrl: './word-home.component.html',
  styleUrls: ['./word-home.component.css']
})
export class WordHomeComponent implements OnInit {
  words: Word[];

  constructor() {
    this.words = [
      new Word('the', '../assets/audio/cat.mp3', 'tricky'),
      new Word('and', '../assets/audio/cat.mp3', 'phase 1'),
      new Word('a', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('to', '../assets/audio/cat.mp3', 'tricky'),
      new Word('said', '../assets/audio/cat.mp3', 'tricky'),
      new Word('in', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('he', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('I', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('of', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('it', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('was', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('you', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('they', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('on', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('she', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('is', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('for', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('at', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('his', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Word('but', '../assets/audio/cat.mp3', 'phase 2'),
      new Word('that', '../assets/audio/cat.mp3', 'phase 2')
    ];
  }

  ngOnInit() {}
}
