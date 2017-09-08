import { Component, OnInit, HostBinding } from '@angular/core';
import {Phonic} from './phonic.model';
@Component({
  selector: 'app-phonic',
  templateUrl: './phonic.component.html',
  styleUrls: ['./phonic.component.css']
})
export class PhonicComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'row';
    phonic: Phonic;

  constructor() {
    this.phonic = new Phonic(
      'Cat',
      'Phase 1',
      'sounds/cat.mp3'
    );
  }

  ngOnInit() {
  }

}
