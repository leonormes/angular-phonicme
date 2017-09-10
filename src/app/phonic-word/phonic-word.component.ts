import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Phonic} from '../phonic.model';

@Component({
  selector: 'phonic-word',
  templateUrl: './phonic-word.component.html',
  styleUrls: ['./phonic-word.component.css']
})
export class PhonicWordComponent implements OnInit {
  @Input() phonic: Phonic;
  @HostBinding('attr.class') cssClass = 'ui huge header'

  constructor() { }

  ngOnInit() {
  }

}
