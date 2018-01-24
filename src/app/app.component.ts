import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Phonic } from './phonic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phonics: Phonic[];

  constructor(private router: Router) {}

  phonicWasSelected(phonic: Phonic): void {
    console.log('Phonic clicked: ', phonic);
  }
}
