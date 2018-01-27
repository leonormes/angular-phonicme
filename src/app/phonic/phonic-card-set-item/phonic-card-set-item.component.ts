import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonic-card-set-item',
  templateUrl: './phonic-card-set-item.component.html',
  styleUrls: ['./phonic-card-set-item.component.css']
})
export class PhonicCardSetItemComponent implements OnInit {
  @Input() cardSet: any;

  constructor() {}

  ngOnInit() {}

  onSelectSet(uuid) {
    console.log(uuid);
  }
}
