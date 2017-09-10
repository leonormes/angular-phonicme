import { Component, EventEmitter } from '@angular/core';
import { Phonic } from './phonic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phonics: Phonic[];

  constructor() {
    this.phonics = [
      new Phonic('Cat', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('Dog', '../assets/audio/cat.mp3', 'phase 1'),
      new Phonic('Bed', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('Sun', '../assets/audio/cat.mp3', 'phase 3'),
      new Phonic('Run', '../assets/audio/cat.mp3', 'phase 2'),
      new Phonic('So', '../assets/audio/cat.mp3', 'phase 2, tricky'),
    ];
  }

  phonicWasSelected(phonic: Phonic): void {
    console.log('Phonic clicked: ', phonic);
  }
}
