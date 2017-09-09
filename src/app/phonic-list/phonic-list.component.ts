import { Input, Component, OnInit } from '@angular/core';
import { Phonic } from '../phonic/phonic.model';

@Component({
  selector: 'app-phonic-list',
  templateUrl: './phonic-list.component.html',
  styleUrls: ['./phonic-list.component.css']
})
export class PhonicListComponent implements OnInit {
  @Input() phonic: Phonic;

  constructor() { }

  ngOnInit() {
  }

}
