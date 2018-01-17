import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-phonic-scheme-item',
  templateUrl: './phonic-scheme-item.component.html',
  styleUrls: ['./phonic-scheme-item.component.css']
})
export class PhonicSchemeItemComponent implements OnInit {
  @Input() phonicScheme: any;

  constructor() {}

  ngOnInit() {}

  onSelectScheme(event) {
    console.log(event.target.id);
  }
}
