import { Input, Component, OnInit, HostBinding } from '@angular/core';
import {Phonic} from './phonic.model';
@Component({
  selector: 'app-phonic',
  templateUrl: './phonic.component.html',
  styleUrls: ['./phonic.component.css']
})
export class PhonicComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'row';
    @Input() phonic: Phonic;

  constructor() {
  }

  ngOnInit() {
  }

}
