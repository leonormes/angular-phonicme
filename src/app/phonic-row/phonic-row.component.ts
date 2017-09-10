import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Phonic} from '../phonic.model';

@Component({
  selector: 'phonic-row',
  templateUrl: './phonic-row.component.html',
  styleUrls: ['./phonic-row.component.css']
})
export class PhonicRowComponent implements OnInit {
  @Input() phonic: Phonic;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
