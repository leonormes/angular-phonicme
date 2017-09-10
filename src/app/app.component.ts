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
      new Phonic('Bed', 'bed.mp3', 'phase 1'),
      new Phonic('Cat', 'cat.mp3', 'phase 1'),
      new Phonic('Dog', 'dog.mp3', 'phase 1'),
      new Phonic('Sun', 'sun.mp3', 'phase 1'),
    ];
  }

  phonicWasSelected(phonic: Phonic): void {
    console.log('Phonic clicked: ', phonic);
  }
}
