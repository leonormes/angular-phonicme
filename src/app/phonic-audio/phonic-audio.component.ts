import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Phonic} from '../phonic.model';
@Component({
  selector: 'phonic-audio',
  templateUrl: './phonic-audio.component.html',
  styleUrls: ['./phonic-audio.component.css']
})
export class PhonicAudioComponent implements OnInit {
  @Input() phonic: Phonic;

  constructor() { }

  ngOnInit() {
  }

}
