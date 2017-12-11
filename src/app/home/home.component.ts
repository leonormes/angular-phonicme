import { Component, OnInit, EventEmitter } from '@angular/core';
import { Phonic } from '../phonic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phonics: Phonic[];

  constructor() {
    this.phonics = [
      new Phonic('the', '../assets/audio/cat.mp3', 'tricky'),
      new Phonic('and', '../assets/audio/cat.mp3', 'phase 1'),
      new Phonic('a', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('to', '../assets/audio/cat.mp3', 'tricky'),
      new Phonic('said', '../assets/audio/cat.mp3', 'tricky'),
      new Phonic('in', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('he', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('I', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('of', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('it', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('was', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('you', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('they', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('on', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('she', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('is', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('for', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('at', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('his', '../assets/audio/cat.mp3', 'phase 2, tricky'),
      new Phonic('but', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('that', '../assets/audio/cat.mp3', 'phase 2')
    ];
  }

  ngOnInit() {}
}
