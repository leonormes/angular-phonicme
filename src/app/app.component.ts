import { Component, EventEmitter } from '@angular/core';
import { Phonic } from './phonic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phonics: Phonic[];

  constructor(private router: Router) {
  }

  phonicWasSelected(phonic: Phonic): void {
    console.log('Phonic clicked: ', phonic);
  }
}
